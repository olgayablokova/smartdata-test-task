import React, {useState} from "react";
import {addBook} from './Store/Utils';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Utils";

export function useInput (value: string): object  {
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
    const {fetch} = useTypedSelector(state => state.authors);

    let userInfo = {
        name: name.state,
        author_id: null,
        desc: desc.state,
        publication_date: publicationDate.state
    };

    return (
        <>
            <div>
                <input type="text"
                       value={name.state}
                       placeholder="Название книги"
                       onChange={(e) => name.onChange(e)}/>
                <select onChange={(e) => {
                        userInfo.author_id = Number(e.target.value)
                }}>
                    <option value="all" selected>Все</option>
                    {fetch && fetch.map(el => {
                            return <option value={el.id}>{el.name}</option>
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
                    name.onChange('');
                    desc.onChange('');
                    publicationDate.onChange('');
                }}>Добавить книгу</button>
            </div>
        </>
    );
}