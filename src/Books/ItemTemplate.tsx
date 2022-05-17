import React, {useState} from "react";
import {Icon} from '../Favorites/Icon';
import {EditFavorite} from "../Favorites/Reducer";
import {useDispatch} from "react-redux";
import {ItemAction} from "../ItemAction/ItemAction";
import {IRecord} from "./Store/Reducer";

/*
   Шаблон книги из списка книг в режиме чтения
 */
interface IProps {
    book: IRecord,
    token: string,
    favBooksUser: number[] | null,
    onEdit: React.MouseEventHandler<SVGElement>,
    onDelete: React.MouseEventHandler<SVGElement>
}
export const ItemTemplate = ({book,
                              token,
                              favBooksUser,
                              onEdit = (f: unknown) => f,
                              onDelete = (f: unknown) => f}: IProps) => {
    const defaultState = favBooksUser?.includes(book.id);
    const [state, setState] = useState(defaultState);
    const dispatch = useDispatch();

    return (
        <div>
            <div>Название: {book.name}</div>
            <div>Описание: {book.desc}</div>
            <div>
                <img src={book.image || './Img/empty.png'} width="50" height="50"/>
            </div>
            {token &&
                <div>
                    <Icon key={book.id}
                          selected={state}
                          onSelect={() => {
                              setState(!state);
                              // @ts-ignore
                              dispatch(EditFavorite(book.id, !state, token));
                              const payload = !state ? favBooksUser && favBooksUser.concat([book.id]) :
                                  favBooksUser && favBooksUser.filter(el => el !== book.id);
                              dispatch({type: 'FETCH_FAV', payload});
                          }}/>
                    <ItemAction onEdit={onEdit}
                                onDelete={onDelete}/>
                </div>
            }

        </div>
    );
}