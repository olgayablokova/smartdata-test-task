import {useTypedSelector} from "../Utils";
import {useDispatch} from "react-redux";
import {getAuthorBooks} from "../Books/Store/Utils";
import React from "react";
import {actionCreateFilter} from "./Reducer";

export const Filter = () => {
    const {author_id} = useTypedSelector(state => state.filter);
    const {fetch} = useTypedSelector(state => state.authors);

    const dispatch = useDispatch();

    return (
        <>
            <select value="all"
                onChange={(e) => {
                    dispatch(actionCreateFilter(e.target .value))
            }}>
                <option value="all">Все</option>
                {fetch && fetch.map(el => {
                        return <option value={el.id}>{el.name}</option>
                    }
                )}
            </select>
            <button onClick={() => {
                dispatch(getAuthorBooks(author_id));
            }}>Отфильтровать</button>
        </>
    );
}