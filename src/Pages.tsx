import React from 'react';
import {Link} from "react-router-dom";
import {navItem, useTypedSelector} from "./Utils";
import {useDispatch} from "react-redux";
import './Page.css';

export const Navbar = () => {
    const {token} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    async function onSubmit() {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        await fetch('https://mobile.fakebook.press/api/logout', opts)
            .then(data=> data.json())
            .then(() => dispatch({type: 'FETCH_AUTH', payload: ''}));
    }

    return (
        <>
            <div className="Page__nav justify-content-center">
                {navItem.map(el => {
                    return <div className="Page__navEl">
                        <Link  to={el.to} className="Page__textNav">{el.name}</Link>
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
