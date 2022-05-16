import {ActionAuthType} from "./Reducer";
import {Dispatch} from "redux";
import {FormEvent} from "react";
import {IActionFav} from '../../Favorites/Reducer';

interface IPostFormDataJson {
    fromData: FormData;
    dispatch: Dispatch<ActionAuthType | IActionFav>
}

export const submit = async (e: FormEvent<HTMLFormElement>,
                             dispatch: Dispatch<ActionAuthType>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fromData = new FormData(form);
    await postFormDataJson({fromData, dispatch});
}

const postFormDataJson = async({fromData, dispatch}:IPostFormDataJson) => {
    const plainFormData = Object.fromEntries(fromData.entries());
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(plainFormData)
    }
    const data = await fetch('https://mobile.fakebook.press/api/login', opts);

    if (data.ok) {
        data.json()
            .then(data => {
                dispatch({type: 'FETCH_AUTH', payload: data.data.token});
                favUserBooks(data.data.token, dispatch);
            });
    } else {
        data.json()
            .then(data => {
                dispatch({type: 'ERROR_AUTH', payload: data});
            });
    }
}

const favUserBooks = async (token: string, dispatch: Dispatch<IActionFav>) => {
    const opts = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    await fetch('https://mobile.fakebook.press/api/favorite-books',
        opts)
        .then(data => data.json())
        .then(data => {
           const books = data.data.reduce((acc: number[], el: {id: number}) => {
                acc.push(el.id);
                return acc;
            },[]);
            dispatch({type: 'FETCH_FAV', payload: books});
        });
}