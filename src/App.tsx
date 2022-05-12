import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from './Pages';
import {Registration} from './Template/Registration';
import Authorization from './Authorization/Authorization';
import {List as AuthorsList} from './Authors/List';
import {List as BooksList} from './Books/List';
import {fetchData} from "./Authors/Store/Utils";
import {useDispatch} from "react-redux";

export default function App() {
    const dispatch = useDispatch();

    useEffect(()=> {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        fetchData(requestOptions, dispatch);
    }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/authorization" element={<Authorization/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/list" element={<AuthorsList/>}/>
        <Route path="/books" element={<BooksList/>}/>
      </Routes>
    </div>
  );
}
