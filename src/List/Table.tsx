import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../Template/Registration";
import React, {useEffect} from "react";
import {ActionType, IRecord} from "./Store/Reducer";
import {ActionTypeB} from "./Store/BooksReducer";


export const Table = ({id}) => {
    const {books} = useTypedSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(()=> {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        const fetchDataBooks = async(data: number[] | null) => {
            let allBooks = [];
            if (!data) return null;
            for(let el of data) {
                let books = fetch(`https://mobile.fakebook.press/api/authors/${el}/books`,
                    requestOptions)
                    .then(data => data.json())
                    .then(data => {return data.data});
                allBooks.push(books);
            }
            return dispatch({type: ActionTypeB.FETCH, payload: allBooks});
        };
        fetchDataBooks(id);
    }, []);

    if (books === null || !books) {
        return null;
    }

    return (
        <>
            <ul>
                {books.map(bk => {
                    return <li key={bk.id}>{bk.name}</li>
                })}
            </ul>
        </>
    );
}