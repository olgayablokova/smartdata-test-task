import React, {memo} from 'react';
import {useTypedSelector} from "../Utils";
import {BookTemplate} from './BookTemplate';
import {EditFavorite} from "../Favorites/Reducer";
import {useDispatch} from "react-redux";

export const ListBooks = () => {
    const {fetch: books, loading, error} = useTypedSelector(state => state.books);
    const Book = memo(BookTemplate);
    const {status} = useTypedSelector(state => state.favorites);
    const dispatch = useDispatch();

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
                                 status={status}
                                 onSelect={() => dispatch(EditFavorite(el.id, !status))}/>
                })}
            </div>
        </>
    );
}