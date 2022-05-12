import React from 'react';
import {Link} from "react-router-dom";
import './Page.css';

export function Home() {
    return (
        <>
            <div>Основная вкладка</div>
            <nav className="Page__nav">
                <Link to="authorization">Авторизация</Link>
                <Link to="registration">Регистрация</Link>
                <Link to="list">Список авторов</Link>
                <Link to="books">Список книг</Link>
            </nav>
        </>
    );
}
