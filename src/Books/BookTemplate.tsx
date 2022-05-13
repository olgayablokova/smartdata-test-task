import React, {useState} from "react";
import {Icon} from '../Favorites/Icon';
import {loadJSON, saveJSON} from "./ListBooks";
import {EditFavorite} from "../Favorites/Reducer";
import {useDispatch} from "react-redux";

/*
   Шаблон книги из списка книг
 */

export const BookTemplate = ({book}) => {
    if (loadJSON(book.id) === null) {
        saveJSON(book.id, {status: false})
    }
    const [state, setState]=useState(loadJSON(book.id).status);
    const dispatch = useDispatch();

    return (
        <div>
            <div>Название: {book.name}</div>
            <div>Описание: {book.desc}</div>
            <div>
                <img src={book.image || './Img/empty.jpg'} width="50" height="50"/>
            </div>
            <Icon key={book.id}
                  selected={state}
                  onSelect={() => {
                      setState(st => !st);
                      const status = !loadJSON(book.id).status;
                      dispatch(EditFavorite(book.id, status));
                      saveJSON(book.id, {status});
                  }}/>
        </div>
    );
}
