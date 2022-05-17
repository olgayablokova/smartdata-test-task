import React from "react";
import {addBook} from './Store/Utils';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Utils";
import {createBookAction} from "./Store/CreateBookReducer";
import './Books.css';

interface IProps {
    token: string
}

export const CreateBook = ({token}: IProps) => {
    const {fetch} = useTypedSelector(state => state.authors);
    const {name, author_id, desc, publication_date} = useTypedSelector(state => state.createBook);
    const dispatch = useDispatch();

    return (
        <>
            <form
                className="Book__add"
                onSubmit={(e) => {
                e.preventDefault();
                // @ts-ignore
                dispatch(addBook({name, author_id, desc, publication_date}, token));
                dispatch(createBookAction({
                name: '',
                desc: '',
                author_id
            }));}}>
                <input type="text"
                       value={name}
                       placeholder="Название книги"
                       className="Book__el"
                       required
                       onChange={(e) =>
                           dispatch(createBookAction({name: e.target.value}))}/>
                <select onChange={(e) => {
                    dispatch(createBookAction({author_id: Number(e.target.value)}))
                }}>
                    <option>Выберите автора</option>
                    {fetch && fetch.map(el => {
                            return <option value={el.id}
                            key={el.id}>{el.name}</option>
                        }
                    )}
                </select>
                <input type="text"
                       value={desc}
                       placeholder="Описание"
                       className="Book__el"
                       required
                       onChange={(e) =>
                           dispatch(createBookAction({desc: e.target.value}))}/>
                <div className="Book__el">
                    <label>Дата публикации:</label>
                    <input type="date"
                           required
                           onChange={(e)=>
                               dispatch(createBookAction({publication_date: e.target.value}))}/>
                </div>
                <button type="submit"
                        className="Book__el">Добавить книгу</button>
            </form>
        </>
    );
}