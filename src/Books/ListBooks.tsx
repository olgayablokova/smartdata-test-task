import React, {memo} from 'react';
import {BookTemplate} from './BookTemplate';
import './Books.css';

import authMobx from "../Authorization/Store/AuthMobx";
import booksMobx from "./Store/BooksMobx";
import {observer} from "mobx-react-lite";

const Books = () => {
    const token = authMobx.token;
    const books = booksMobx.books;
    const Book = memo(BookTemplate);

    if (booksMobx.loading) {
        return <div>loading</div>;
    }

    if (booksMobx.error) {
        return <div>Error</div>;
    }

    if (!booksMobx.books.length) {
        return <div>Empty view</div>;
    }

    return (
        <>
            <div className="Books__List">
                {books.map(el => {
                    return <Book key={el.id}
                                 book={el}
                                 token={token}
                                 favBooksUser={authMobx.favBooks}
                    />
                })}
            </div>
        </>
    );
}

export const ListBooks = observer(Books)