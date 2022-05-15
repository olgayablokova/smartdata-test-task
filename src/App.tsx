import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from './Pages';
import {Registration} from './Registration/Registration';
import Authorization from './Authorization/Authorization';
import {List as AuthorsList} from './Authors/List';
import {List as BooksList} from './Books/List';
import {fetchData as AuthorData} from "./Authors/Store/Utils";
import {fetchData as BooksData} from "./Books/Store/Utils";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./Utils";

export default function App() {
    const dispatch = useDispatch();
    const {token} = useTypedSelector(state => state.user);

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
            .then(data=>
                data.data);
    }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/authorization" element={<Authorization/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/authors" element={<AuthorsList/>}/>
        <Route path="/books" element={<BooksList/>}/>
      </Routes>
        <button onClick={(e) => onSubmit(e)}>Выйти</button>
    </div>
  );
}
