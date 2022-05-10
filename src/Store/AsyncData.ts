import {ActionType, IAction} from "./RegReducer";
import {Dispatch} from 'redux';
import {useTypedSelector} from "../Template/Registration";

export interface IUserInfo {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export const submitForm = (userInfo: IUserInfo) => {
    return async (dispatch: Dispatch<IAction>) => {
        // const stat = useTypedSelector(state => state.RegReducer.user);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({userInfo})
        };
        await fetch('https://mobile.fakebook.press/api/register',
            requestOptions)
            .then(data => data.json())
            .then(data => {
                dispatch({
                    type: data.ok ? ActionType.fetchData : ActionType.error,
                    payload: data});
            });
    }
};