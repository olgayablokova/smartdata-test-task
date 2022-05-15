import React, {memo, useEffect} from 'react';
import {useTypedSelector} from "../Utils";
import {BookTemplate} from './BookTemplate';

export const ListBooks = () => {
    const {fetch: books, loading, error} = useTypedSelector(state => state.books);
    const {token} = useTypedSelector(state => state.user);
    const {favBooksUser} = useTypedSelector(state => state.favorites);
    const Book = memo(BookTemplate);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    if (!books.length) {
        return <div>Empty view</div>;
    }

    return (
        <>
            <div>
                {books.map(el => {
                    return <Book key={el.id}
                                 book={el}
                                 token={token}
                                 favBooksUser={favBooksUser}/>
                })}
            </div>
        </>
    );
}