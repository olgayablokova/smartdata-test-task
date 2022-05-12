import React from "react";
import {IRecord} from "./Store/Reducer";

/*
   Шаблон автора из списка авторов
 */

export const AuthorTemplate = ({author}) => {
    return (
        <div>
            <div>{author.name}</div>
            <div>{author.birth_date}</div>
            <div>{author.died_date}</div>
            <div>
                <img src={author.image} width="50" height="50"/>
            </div>
        </div>
    );
}
