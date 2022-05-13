import React, {useState} from "react";
import {Icon} from '../Favorites/Icon';
import {useDispatch, useSelector} from "react-redux";
import {EditFavorite} from "../Favorites/Reducer";
import {useTypedSelector} from "../Utils";

/*
   Шаблон книги из списка книг
 */

export const BookTemplate = ({book}) => {
const state = useTypedSelector(state => state.favorites);
const dispatch = useDispatch();
    return (
        <div>
            <div>Название: {book.name}</div>
            <div>Описание: {book.desc}</div>
            <div>
                <img src={book.image} width="50" height="50"/>
            </div>
            <Icon selected={state}
                  onSelect={() => dispatch(EditFavorite(book.id, state))}/>
        </div>
    );
}
