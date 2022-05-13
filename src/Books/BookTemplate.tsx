import React, {useState} from "react";
import {Icon} from '../Favorites/Icon';

/*
   Шаблон книги из списка книг
 */

export const BookTemplate = ({book, status, onSelect = f => f}) => {

    return (
        <div>
            <div>Название: {book.name}</div>
            <div>Описание: {book.desc}</div>
            <div>
                <img src={book.image} width="50" height="50"/>
            </div>
            <Icon key={book.id}
                  selected={status}
                  onSelect={onSelect}/>
        </div>
    );
}
