import React, {memo, useState} from "react";
import {addBook} from './Store/Utils';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Template/Registration";

interface IUseInput<T> {
    state: T;
    onChange: unknown;
}

const selectAuthor = (authors, userInfo) => {
    return (
        <select onChange={(e) => {
            userInfo.author_id = Number(e.target.value)
        }}>
            {authors && authors.map(el => {
                    return <option value={el.author_id}>{el.name}</option>
                }
            )}
        </select>
    );
}

export function useInput<Type> (value: Type): any  {
    const [state, setState] = useState(value);

    const onChange = (e) => {
        setState(e.target.value);
    }

    return {
        state,
        onChange
    }
}

export const CreateBook = () => {
    const name = useInput('');
    const desc = useInput('');
    const publicationDate = useInput('');
    const dispatch = useDispatch();
    const {authors} = useTypedSelector(state => state.authors);
    let userInfo = {
        name: name.state,
        author_id: 9,
        desc: desc.state,
        publication_date: publicationDate.state
    };
    const Select = memo(selectAuthor);

    return (
        <>
            <div>
                <input type="text"
                       value={name.state}
                       placeholder="Название книги"
                       onChange={(e) => name.onChange(e)}/>
                <select>
                    {authors && authors.map(el => {
                            return <option value={el.author_id}>{el.name}</option>
                        }
                    )}
                </select>
                <input type="text"
                       value={desc.state}
                       placeholder="Описание"
                       onChange={(e) => desc.onChange(e)}/>
                <input type="text"
                       value={publicationDate.state}
                       placeholder="Дата публикации"
                       onChange={(e) => publicationDate.onChange(e)}/>
                <button onClick={(e) => {
                    dispatch(addBook(userInfo));
                }}>Добавить книгу</button>
            </div>
        </>
    );
}