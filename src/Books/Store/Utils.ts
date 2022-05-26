import {ActionTypeBook, IAction, IUserInfo} from "./Reducer";
import {Dispatch} from "redux";

interface IUpdateBook {
    id: number;
    body: object;
}

export const fetchData = async(requestOptions: object, dispatch: Dispatch<IAction>, newUrl?: string) => {
    dispatch({type: ActionTypeBook.LOADINGB, payload: true});

    const url = !newUrl ? 'https://mobile.fakebook.press/api/books' : newUrl;
    const actionType = !newUrl ? ActionTypeBook.FETCHB: ActionTypeBook.FETCHFILTER;

    const data = await fetch(url, requestOptions);
    data.ok ?
        await data.json().then(data => {
            dispatch({type: ActionTypeBook.LOADINGB, payload: false});
            return dispatch({type: actionType, payload: data.data});
        }) :
        dispatch({type: ActionTypeBook.ERRORB, payload: true});
};

export const addBook = (userInfo: IUserInfo, token: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userInfo)
        };
        await fetchData(requestOptions, dispatch);
    }
}

export function getAuthorBooks (id: number | string): (dispatch: Dispatch<IAction>) => Promise<void>  {
    return async (dispatch: Dispatch<IAction>) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        if (typeof id === 'string' && id === 'all') {
            await fetchData(requestOptions, dispatch);
        } else {
            const url = `https://mobile.fakebook.press/api/authors/${id}/books`;
            await fetchData(requestOptions, dispatch, url);
        }
    }
}

export const deleteBook = (id: number, token: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = `https://mobile.fakebook.press/api/books/${id}`
        await fetchData(requestOptions, dispatch, url);
    }
}

export const updateBook = ({id, body}: IUpdateBook, token: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                body: JSON.stringify({body})
            },

        };
        const url = `https://mobile.fakebook.press/api/books/${id}`
        await fetchData(requestOptions, dispatch, url);
    }
}