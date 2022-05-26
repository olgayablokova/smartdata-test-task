import React from "react";
import {authorsMobx} from "../Store/Index";
import {booksMobx} from '../Store/Index';
import {observer} from "mobx-react-lite";

const FilterTml = () => {
    const fetch = authorsMobx.fetch;

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