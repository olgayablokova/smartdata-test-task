import React from "react";
import {useDispatch} from "react-redux";
import {submit} from "./Store/Utils";
import {useTypedSelector} from "../Utils";
import './Authorization.css';

export default function Authorization() {
    const {error, token} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className="Authorization">
            {!token &&
                <form id="from" onSubmit={(e) =>
                submit(e, dispatch)}
                className="Authorization__form">
                {(error?.login || error?.email) &&
                    <label>{error?.login && error?.login[0] || error?.email && error?.email[0]}</label>}
                <input type="email"
                       name="email"
                       placeholder="Введите email"
                       required
                       className="Authorization__validate"></input>
                <input type="password"
                       name="password"
                       placeholder="Введите пароль"
                       minLength={6}
                       maxLength={8}
                       className="Authorization__validate"
                       required></input>
                <input type="password"
                       name="password_confirmation"
                       placeholder="Подтвердите пароль"
                       minLength={6}
                       maxLength={8}
                       className="Authorization__validate"
                       required></input>
                <button type="submit"
                className="">Войти</button>
            </form>}
            {token && <div className="Authorization__inside">Авторизовались</div>}
        </div>
    );
}