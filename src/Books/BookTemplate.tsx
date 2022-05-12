import React from "react";

/*
   Шаблон книги из списка книг
 */

export const BookTemplate = ({book}) => {

    return (
        <div>
            <div>Название: {book.name}</div>
            <div>Описание: {book.desc}</div>
            <div>
                <img src={book.image} width="50" height="50"/>
            </div>
        </div>
    );
}
