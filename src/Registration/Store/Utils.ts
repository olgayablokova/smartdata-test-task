import {ActionTypeReg, IActionReg} from "./RegReducer";
import {Dispatch} from 'redux';

export interface IUserInfo {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export const submitForm = (userInfo: IUserInfo) => {
    return async (dispatch: Dispatch<IActionReg>) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({userInfo})
        };
        dispatch({type: ActionTypeReg.LOADING_REG, payload: true});
        const data = await fetch('https://mobile.fakebook.press/api/register', requestOptions);
        if (data.ok) {
            data.json()
                .then(data => {
                    dispatch({type: ActionTypeReg.FETCH_REG, payload: data.data});
                });
        } else {
            dispatch({type: ActionTypeReg.ERROR_REG, payload: true});
        }
    }
};