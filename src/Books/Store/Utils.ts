import {ActionType, IAction, IUserInfo} from "./Reducer";
import {Dispatch} from "redux";
import {TOKEN} from "../../Utils";

export const fetchData = async(requestOptions: object, dispatch: Dispatch<IAction>, newUrl?: string) => {
    dispatch({type: ActionType.LOADING, payload: true});

    const url = !newUrl ? 'https://mobile.fakebook.press/api/books' : newUrl;

    const data = await fetch(url, requestOptions);
    data.ok ?
        await data.json().then(data => {
            dispatch({type: ActionType.LOADING, payload: false});
            return dispatch({type: ActionType.FETCH, payload: data.data});
        }) :
        dispatch({type: ActionType.ERROR, payload: true});
};

export const addBook = (userInfo: IUserInfo) => {
    return async (dispatch: Dispatch<IAction>) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(userInfo)
        };
        await fetchData(requestOptions, dispatch);
    }
}

export function getAuthorBooks (id: number): (dispatch: Dispatch<IAction>) => Promise<void>  {
    return async (dispatch: Dispatch<IAction>) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        const url = `https://mobile.fakebook.press/api/authors/${id}/books`;
        await fetchData(requestOptions, dispatch, url);
    }
}