import React, {useState} from "react";
import {Icon} from '../Favorites/Icon';
import {EditFavorite} from "../Favorites/Reducer";
import {useDispatch} from "react-redux";
import './Books.css';

/*
   Шаблон книги из списка книг
 */

export const BookTemplate = ({book, token, favBooksUser}) => {
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
                          const payload = !state ? favBooksUser.concat([book.id]) :
                              favBooksUser.filter(el=> el !== book.id);
                          dispatch({type: 'FETCH_FAV', payload});
                      }}/>
            }
        </div>
    );
}
