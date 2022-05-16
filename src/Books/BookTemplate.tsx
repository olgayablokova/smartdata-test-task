import React, {useState} from "react";
import {Icon} from '../Favorites/Icon';
import {EditFavorite} from "../Favorites/Reducer";
import {useDispatch} from "react-redux";
import './Books.css';
import {IRecord} from './Store/Reducer';

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
    const dispatch = useDispatch();

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
                          dispatch(EditFavorite(book.id, !state, token));
                          const payload = !state ? favBooksUser && favBooksUser.concat([book.id]) :
                              favBooksUser && favBooksUser.filter(el=> el !== book.id);
                          dispatch({type: 'FETCH_FAV', payload});
                      }}/>
            }
        </div>
    );
}
