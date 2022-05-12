import {ActionType, IAction, IUserInfo} from "./Reducer";
import {Dispatch} from "redux";
import {TOKEN} from "../../Utils";

export const fetchData = async(requestOptions: object, dispatch: Dispatch<IAction>) => {
    dispatch({type: ActionType.LOADING, payload: true});
    const data = await fetch('https://mobile.fakebook.press/api/books',
        requestOptions);
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
        fetchData(requestOptions, dispatch);
    }
}