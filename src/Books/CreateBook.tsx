import React from "react";
import {addBook} from './Store/Utils';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Utils";
import {createBookAction} from "./Store/CreateBookReducer";

export const CreateBook = () => {
    const {fetch} = useTypedSelector(state => state.authors);
    const {name, author_id, desc, publication_date} = useTypedSelector(state => state.createBook);
    const dispatch = useDispatch();

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(addBook({name, author_id, desc, publication_date}));
                dispatch(createBookAction({
                publication_date: '',
                name: '',
                desc: ''
            }));}}>
                <input type="text"
                       value={name}
                       placeholder="Название книги"
                       onChange={(e) =>
                           dispatch(createBookAction({name: e.target.value}))}/>
                <select onChange={(e) => {
                    dispatch(createBookAction({author_id: Number(e.target.value)}))
                }}>
                    {fetch && fetch.map(el => {
                            return <option value={el.id}>{el.name}</option>
                        }
                    )}
                </select>
                <input type="text"
                       value={desc}
                       placeholder="Описание"
                       onChange={(e) =>
                           dispatch(createBookAction({desc: e.target.value}))}/>
                <div>
                    <label>Дата публикации:</label>
                    <input type="date"
                           onChange={(e)=>
                               dispatch(createBookAction({publication_date: e.target.value}))}/>
                </div>
                <button type="submit">Добавить книгу</button>
            </form>
        </>
    );
}