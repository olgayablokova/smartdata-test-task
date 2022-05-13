import React, {memo} from 'react';
import {useTypedSelector} from "../Utils";
import {BookTemplate} from './BookTemplate';

export const List = () => {
    const {fetch: books, loading, error} = useTypedSelector(state => state.books);
    const Book = memo(BookTemplate);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <div>
                {books.map(el => {
                    return <Book key={el.id} book={el}/>
                })}
            </div>
        </>
    );
}