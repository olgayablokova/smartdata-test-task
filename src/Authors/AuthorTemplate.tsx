import React from "react";
import './Authors.css';

/*
   Шаблон автора из списка авторов
 */

interface IProps {
    author: {
        name: string,
        birth_date: string,
        died_date: string,
        image: string
    }
}

export const AuthorTemplate = ({author}: IProps) => {
    return (
        <div className="Author__El">
            <div className="Author__ElText">
                <div>{author.name}</div>
                <div>{author.birth_date}</div>
                <div>{author.died_date}</div>
            </div>
            <div>
                <img src={author.image} width="50" height="50"/>
            </div>
        </div>
    );
}
