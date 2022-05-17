import React from 'react';
import {Link} from "react-router-dom";
import {navItem, useTypedSelector} from "./Utils";
import {useDispatch} from "react-redux";
import {fetchData as BooksData} from "./Books/Store/Utils";
import './Page.css';

export const Navbar = () => {
    const {token} = useTypedSelector(state => state.user);
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
            .then(() => dispatch({type: 'FETCH_AUTH', payload: ''}));
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
