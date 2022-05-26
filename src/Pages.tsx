import React from 'react';
import {Link} from "react-router-dom";
import {navItem} from "./Utils";
import {useDispatch} from "react-redux";
import {fetchData as BooksData} from "./Books/Store/Utils";

import authMobx from './Authorization/Store/AuthMobx'
import {observer} from "mobx-react-lite";

import './Page.css';

const NavbarTmp = () => {
    const token = authMobx.token;
    const dispatch = useDispatch();

    async function onSubmit() {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        const opts = {
            method: 'GET',
            headers
        };
        const optsLogout = {
            method: 'POST',
            headers: {
                ...headers,
                'Authorization': `Bearer ${token}`
            }
        }
        await fetch('https://mobile.fakebook.press/api/logout', optsLogout)
            .then(data=> data.json())
            .then(() => authMobx.clearToken());
        await BooksData(opts, dispatch);
    }

    return (
        <>
            <div className="Page__nav justify-content-center">
                {navItem.map(el => {
                    return <div key={el.to} className="Page__navEl">
                        <Link  key={el.to} to={el.to} className="Page__textNav">{el.name}</Link>
                    </div>
                })}
                {token && <div>
                    <button onClick={() => onSubmit()}
                    className="Page__btnExit">Выйти</button>
                </div>}
            </div>
        </>
    )
}
export const Navbar = observer(NavbarTmp);