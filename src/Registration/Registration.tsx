import React from "react";
import './Registration.css';

import regMobx from './Store/RegMobx';
import {observer} from "mobx-react-lite";

const RegistrationTml = () => {
    const error = regMobx.error;
    const fetch = regMobx.fetch;

    return (
        <div className="Registration">
            {fetch && <label>Успешно зарегистрировались</label>}
            <span>Регистрация</span>
            <form className="Registration__from"
                  onSubmit={(e) => {
                      e.preventDefault();
                      regMobx.submit(e)
                  }}>
                {error?.name && <label>{error.name[0]}</label>}
                <input type="text"
                       name="name"
                       placeholder='Введите имя'
                       className="Registration__input"
                       required/>
                {error?.email && <label>{error.email[0]}</label>}
                <input type="text"
                       name="email"
                       placeholder='Введите логин'
                       className="Registration__input"
                       required/>
                {error?.password && <label>{error.password[0]}</label>}
                <input type="password"
                       name="password"
                       placeholder='Введите пароль'
                       className="Registration__input"
                       required/>
                <input type="password"
                       name="password_confirmation"
                       placeholder='Подтвердите пароль'
                       className="Registration__input"
                       required/>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export const Registration = observer(RegistrationTml)