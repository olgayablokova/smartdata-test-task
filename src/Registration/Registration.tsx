import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {submitForm} from "./Store/Utils";
import {useTypedSelector} from "../Utils";
import './Registration.css';

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
    const {error} = useTypedSelector(state => state.RegReducer);

    return (
        <div className="Registration">
            <span>Регистрация</span>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(submitForm(userInfo))}
            }
            className="Registration__from">
                {error?.name && <label>{error.name[0]}</label>}
            <input type="text"
                       value={name}
                       onChange={(e) => nameChange(e.target.value)}
                       placeholder='Введите имя'
                       className="Registration__input"
                       required/>
                {error?.email && <label>{error.email[0]}</label>}
                <input type="text"
                       value={email}
                       onChange={(e) => emailChange(e.target.value)}
                       placeholder='Введите логин'
                       className="Registration__input"
                       required/>
                {error?.password && <label>{error.password[0]}</label>}
                <input type="password"
                       value={password}
                       placeholder='Введите пароль'
                       className="Registration__input"
                       onChange={(e) => passwordChange(e.target.value)}
                       required/>
                <input type="password"
                       value={password_confirmation}
                       placeholder='Подтвердите пароль'
                       className="Registration__input"
                       onChange={(e) => password_confirmationChange(e.target.value)}
                       required/>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}