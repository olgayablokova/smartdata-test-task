import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {Navbar} from './Pages';
import {Registration} from './Registration/Registration';
import {Authorization} from './Authorization/Authorization';
import {List as AuthorList} from './Authors/List';
import {List as BooksList} from './Books/List';
import {BrowserRouter} from "react-router-dom";

import { injectStores } from '@mobx-devtools/tools';
import {
    authMobx,
    authorsMobx,
    booksMobx,
    faMobx,
    regMobx
} from './Store/Index'
import {observer} from "mobx-react-lite";

injectStores({
    authMobx,
    authorsMobx,
    booksMobx,
    faMobx,
    regMobx
});

const AppTml = () => {

    useEffect(()=> {
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        authorsMobx.fetchData(opts);
        booksMobx.fetchData(opts);
    }, []);

    return (
         <BrowserRouter>
        <div className="app-wrapper">
            <Navbar/>
            <Routes>
                <Route path="/" element={<BooksList />}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/authors" element={<AuthorList/>}/>
                <Route path="/books" element={<BooksList/>}/>
            </Routes>
        </div>
    </BrowserRouter>)
}
export const App = observer(AppTml)