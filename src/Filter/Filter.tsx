import React from "react";
import authMobx from "../Authors/Store/AuthMobx";
import booksMobx from '../Books/Store/BooksMobx';
import {observer} from "mobx-react-lite";

const FilterTml = () => {
    const fetch = authMobx.fetch;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            booksMobx.getAuthorBooks(e)
        }}>
            <select name="author_id">
                <option>Выберите автора</option>
                {fetch && fetch.map(el => {
                        return <option key={el.id} value={el.id}>{el.name}</option>
                    }
                )}
                <option value="all">Все</option>
            </select>
            <button type="submit">Отфильтровать</button>
        </form>
    );
}

export const Filter = observer(FilterTml);