import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home, Authorization} from './Pages';
import {Registration} from './Template/Registration';
import {List} from './List/List';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/authorization" element={<Authorization/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </div>
  );
}
