import React from "react";
import {useDispatch} from "react-redux";
import {submit} from "./Store/Utils";

export default function Authorization() {
    const dispatch = useDispatch();

    return (
        <>
            <form id="from" onSubmit={(e) =>
                submit(e, dispatch)}>
                <input type="email" name="email" placeholder="Введите email"></input>
                <input type="password" name="password" placeholder="Введите пароль"></input>
                <input type="password" name="password_confirmation" placeholder="Подтвердите пароль"></input>
                <button type="submit">Войти</button>
            </form>
        </>
    );
}