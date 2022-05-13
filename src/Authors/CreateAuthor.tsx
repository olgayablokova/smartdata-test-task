import React, {useState} from "react";
import {addAuthor} from "./Store/Utils";
import {useDispatch} from "react-redux";
import './Authors.css';

export const useInputT = (value: string) => {
    const [state, setState] = useState(value);

    const onChange = (e) => {
        setState(e.target.value);
    }

    return {
        state,
        onChange
    }
}

export const CreateAuthor = () => {
    const name = useInputT('');
    const bio = useInputT('');
    const birthDate = useInputT('');
    const dispatch = useDispatch();
    const userInfo = {
        name: name.state,
        bio: bio.state,
        birth_date: birthDate.state
    };

    return (
        <div className="CreateAuthor">
            <input type="text"
                   placeholder="ФИО автора"
                   value={name.state}
                   onChange={(e) => name.onChange(e)}/>
            <input type="text"
                   placeholder="Биографи"
                   value={bio.state}
                   onChange={(e) => bio.onChange(e)}/>
            <input type="text"
                   placeholder="Дата рождения"
                   value={birthDate.state}
                   onChange={(e) => birthDate.onChange(e)}/>
            <button onClick={() => {dispatch(addAuthor(userInfo))}}>Добавить автора</button>
        </div>
    );
}
