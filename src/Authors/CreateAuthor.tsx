import React from "react";
import {addAuthor} from "./Store/Utils";
import {useDispatch} from "react-redux";
import './Authors.css';
import {useTypedSelector} from "../Utils";
import {createAuthorAction} from "./Store/CreateAuthorReducer";
import './Authors.css';

interface IProps {
    token: string;
}

export const CreateAuthor = ({token}: IProps) => {
    const {name, bio, birth_date} = useTypedSelector(state => state.createAuthor);
    const dispatch = useDispatch();
    const userInfo = {
        name,
        bio,
        birth_date
    };

    return (
        <form className="CreateAuthor__list"
              onSubmit={(e) => {
                  e.preventDefault();
                  // @ts-ignore
                  dispatch(addAuthor(userInfo, token));
                  dispatch(createAuthorAction({
                      name: '',
                      bio: '',
                      birth_date: ''
                  }));}}>
            <input type="text"
                   placeholder="ФИО автора"
                   value={name}
                   className="CreateAuthor__el"
                   onChange={(e) =>
                       dispatch(createAuthorAction({name: e.target.value
                   }))}
                   required/>
            <input type="text"
                   placeholder="Биография"
                   value={bio}
                   className="CreateAuthor__el"
                   required
                   onChange={(e) =>
                       dispatch(createAuthorAction({bio: e.target.value
                   }))}/>
            <div className="CreateAuthor__el">
                <label>Дата рождения:</label>
                <input type="date"
                       required
                       onChange={(e) =>
                           dispatch(createAuthorAction({birth_date: e.target.value
                       }))}/>
            </div>
            <button type='submit'>Добавить автора</button>
        </form>
    );
}
