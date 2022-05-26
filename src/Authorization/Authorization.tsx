import React from 'react';
import {observer} from 'mobx-react-lite';
import authMobx from './Store/AuthMobx'
import './Authorization.css';

const AuthorizationTpl = () => {
    const error = authMobx.error;

    return (
        <div className="Authorization">
            {!authMobx.token &&
                <form id="from"
                      onSubmit={(e) => {
                          e.preventDefault()
                          authMobx.submit(e)
                      }}
                      className="Authorization__form">
                {(error?.login || error?.email) &&
                    <label>{error?.login && error?.login[0]
                        || error?.email && error?.email[0]}</label>}
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
            {authMobx.token && <div className="Authorization__inside">Авторизовались</div>}
        </div>
    );
}

export const Authorization = observer(AuthorizationTpl);