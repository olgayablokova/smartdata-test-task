import React from "react";
import './Books.css';
import AuthorsMobx from "../Authors/Store/AuthMobx";
import booksMobx from './Store/BooksMobx';

interface IProps {
    token: string
}

export const CreateBook = ({token}: IProps) => {
    const fetch = AuthorsMobx.fetch;

    return (
        <>
            <form
                className="Book__add"
                onSubmit={(e) => {
                e.preventDefault();
                booksMobx.addBook(e, token)
               }}>
                <input type="text"
                       name="name"
                       placeholder="Название книги"
                       className="Book__el"
                       required
                />
                <select name="author_id">
                    <option>Выберите автора</option>
                    {fetch && fetch.map(el => {
                            return <option value={el.id}
                            key={el.id}>{el.name}</option>
                        }
                    )}
                </select>
                <input type="text"
                       name="desc"
                       placeholder="Описание"
                       className="Book__el"
                       required/>
                <div className="Book__el">
                    <label>Дата публикации:</label>
                    <input type="date"
                           required
                           name="publication_date"/>
                </div>
                <button type="submit"
                        className="Book__el">Добавить книгу</button>
            </form>
        </>
    );
}