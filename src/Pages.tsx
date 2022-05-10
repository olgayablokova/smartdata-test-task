import React from 'react';
import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
            <div>Основная вкладка</div>
            <nav>
                <Link to="authorization">Авторизация</Link>
                <Link to="registration">Регистрация</Link>
                <Link to="list">Список</Link>
            </nav>
        </>
    );
}

export function Authorization() {
    return (
        <div>Вкладка авторизации</div>
    );
}

