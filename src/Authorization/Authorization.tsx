import React from "react";
import {useDispatch} from "react-redux";
import {submit} from "./Store/Utils";
import './Page.css';

export default function Authorization() {
    const dispatch = useDispatch();

    return (
        <>
            <form id="from" onSubmit={(e) =>
                submit(e, dispatch)}
                className="Page__nav">
                <input type="email" name="email" placeholder="Введите email"></input>
                <input type="password" name="password" placeholder="Введите пароль"></input>
                <input type="password" name="password_confirmation" placeholder="Подтвердите пароль"></input>
                <button type="submit">Войти</button>
            </form>
        </>
    );
}