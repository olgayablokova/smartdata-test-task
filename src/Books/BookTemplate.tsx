import React, {useState} from "react";
import {Icon} from '../Favorites/Icon';
import './Books.css';
import {IRecord} from './Store/Reducer';

import faMobx from '../Favorites/FaMobx';
import authMobx from "../Authorization/Store/AuthMobx";

/*
   Шаблон книги из списка книг
 */

interface IProps {
    book: IRecord,
    token: string,
    favBooksUser?: number[] | null
}

export const BookTemplate = ({book, token, favBooksUser}: IProps) => {
    const defaultState = favBooksUser?.includes(book.id);
    const [state, setState] = useState(defaultState);

    return (
        <div className="Book__El">
            <div className="Books__ElText">
                <div>Название: {book.name}</div>
                <div>Описание: {book.desc}</div>
            </div>
            <div>
                <img src={book.image || './Img/empty.png'}
                     width="50"
                     height="50"/>
            </div>
            {token &&
                <Icon key={book.id}
                      selected={state}
                      onSelect={() => {
                          setState(!state);
                          faMobx.editFavorite(book.id, !state, token);
                          const payload = !state ? favBooksUser && favBooksUser.concat([book.id]) :
                              favBooksUser && favBooksUser.filter(el=> el !== book.id);
                          authMobx.editFavBooks(payload)
                      }}/>
            }
        </div>
    );
}
