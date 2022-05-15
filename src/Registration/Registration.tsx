import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {submitForm} from "./Store/Utils";

const useUserState = () => {
    const [state, setState] = useState('');

    const onChange = (value: string) => {
        setState(value);
    }

    return {
        state,
        onChange
    }
};

export function Registration() {
    const {state: name, onChange: nameChange} = useUserState();
    const {state: email, onChange: emailChange} = useUserState();
    const {state: password, onChange: passwordChange} = useUserState();
    const {state: password_confirmation, onChange: password_confirmationChange} = useUserState();
    const dispatch = useDispatch();
    const userInfo = {name, email, password, password_confirmation};

    return (
        <>
            <span>Регистрация</span>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(submitForm(userInfo))}
            }>
            <input type="text"
                       value={name}
                       onChange={(e) => nameChange(e.target.value)}
                       placeholder='Введите имя'
                       required/>
                <input type="text"
                       value={email}
                       onChange={(e) => emailChange(e.target.value)}
                       placeholder='Введите логин'
                       required/>
                <input type="text"
                       value={password}
                       placeholder='Введите пароль'
                       onChange={(e) => passwordChange(e.target.value)}
                       required/>
                <input type="text"
                       value={password_confirmation}
                       placeholder='Подтвердите пароль'
                       onChange={(e) => password_confirmationChange(e.target.value)}
                       required/>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    );
}