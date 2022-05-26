import React from "react";
import './Authors.css';
import {FaTrashAlt} from "react-icons/fa";
import authorsMobx from './Store/AuthMobx';

/*
   Шаблон автора из списка авторов
 */

interface IProps {
    author: {
        name: string,
        birth_date: string,
        died_date: string,
        image: string,
        id: number
    },
    token: string
}

export const AuthorTemplate = ({author, token}: IProps) => {
    return (
        <div className="Author__el">
            <div className="Author__ElText">
                <div>{author.name}</div>
                <div>{author.birth_date}</div>
                <div>{author.died_date}</div>
            </div>
            <div>
                <img src={author.image} width="50" height="50"/>
            </div>
            {token && <FaTrashAlt onClick={() => authorsMobx.authorDelete(token, author.id)}/>}
        </div>
    );
}
