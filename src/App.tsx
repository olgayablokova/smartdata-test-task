import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {Navbar} from './Pages';
import {Registration} from './Registration/Registration';
import Authorization from './Authorization/Authorization';
import {List as AuthorsList} from './Authors/List';
import {List as BooksList} from './Books/List';
import {fetchData as AuthorData} from "./Authors/Store/Utils";
import {fetchData as BooksData} from "./Books/Store/Utils";
import {useDispatch} from "react-redux";
import {BrowserRouter} from "react-router-dom";

export default function App() {
    const dispatch = useDispatch();

    useEffect(()=> {
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        AuthorData(opts, dispatch);
        BooksData(opts, dispatch);
    }, []);

    return (
         <BrowserRouter>
        <div className="app-wrapper">
            <Navbar/>
            <Routes>
                <Route path="/" element={<BooksList/>}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/authors" element={<AuthorsList/>}/>
                <Route path="/books" element={<BooksList/>}/>
            </Routes>
        </div>
    </BrowserRouter>)

}
