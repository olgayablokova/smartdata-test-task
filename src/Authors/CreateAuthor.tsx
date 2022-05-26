import React from "react";
import {useDispatch} from "react-redux";
import './Authors.css';
import './Authors.css';

import AuthorsMobx from './Store/AuthMobx';

interface IProps {
    token: string;
}

export const CreateAuthor = ({token}: IProps) => {
    const dispatch = useDispatch();

    return (
        <form className="CreateAuthor__list"
              onSubmit={(e) => {
                  e.preventDefault();
                  AuthorsMobx.addAuthor(e, token);
                  }}>
            <input type="text"
                   placeholder="ФИО автора"
                   name="name"
                   className="CreateAuthor__el"
                   required/>
            <input type="text"
                   placeholder="Биография"
                   name="bio"
                   className="CreateAuthor__el"
                   required
                   />
            <div className="CreateAuthor__el">
                <label>Дата рождения:</label>
                <input type="date"
                       required
                       name="birth_date"
                />
            </div>
            <button type='submit'>Добавить автора</button>
        </form>
    );
}
