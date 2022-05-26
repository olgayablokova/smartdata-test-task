import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {Navbar} from './Pages';
import {Registration} from './Registration/Registration';
import {Authorization} from './Authorization/Authorization';
import {List as AuthorList} from './Authors/List';
import {List as BooksList} from './Books/List';
import {BrowserRouter} from "react-router-dom";

import authMobx from './Authors/Store/AuthMobx'
import booksMobx from "./Books/Store/BooksMobx";

export const App = () => {

    useEffect(()=> {
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        authMobx.fetchData(opts);
        booksMobx.fetchData(opts);
    }, []);

    return (
         <BrowserRouter>
        <div className="app-wrapper">
            <Navbar/>
            <Routes>
                <Route path="/" element={<BooksList/>}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/authors" element={<AuthorList/>}/>
                <Route path="/books" element={<BooksList/>}/>
            </Routes>
        </div>
    </BrowserRouter>)
}
