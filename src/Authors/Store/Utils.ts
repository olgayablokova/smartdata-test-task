import {ActionTypeAuthors, IAction} from "./Reducer";
import {Dispatch} from "redux";

interface IUserInfo {
    name: string;
    bio: string;
    birth_date: string;
}

export const fetchData = async (requestOptions: object, dispatch: Dispatch<IAction>) => {
    dispatch({type: ActionTypeAuthors.LOADINGA, payload: true});

    const data = await fetch('https://mobile.fakebook.press/api/authors',
        requestOptions);

    data.ok ?
        data.json().then(data => {
            dispatch({type: ActionTypeAuthors.LOADINGA, payload: false});
            return dispatch({type: ActionTypeAuthors.FETCHA, payload: data.data});
        }) : dispatch({type: ActionTypeAuthors.ERRORA, payload: true});
}

export const addAuthor = (userInfo: IUserInfo, token: string) => {
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