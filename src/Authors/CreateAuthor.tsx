import React from "react";
import './Authors.css';
import './Authors.css';

import {authorsMobx} from '../Store/Index';

interface IProps {
    token: string;
}

export const CreateAuthor = ({token}: IProps) => {

    return (
        <form className="CreateAuthor__list"
              onSubmit={(e) => {
                  e.preventDefault();
                  authorsMobx.addAuthor(e, token);
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
