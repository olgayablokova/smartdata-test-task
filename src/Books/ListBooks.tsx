import React, {memo, useEffect} from 'react';
import {useTypedSelector} from "../Utils";
import {BookTemplate} from './BookTemplate';

export const loadJSON = (value: number) => {
    const key = value.toString();
    return key && JSON.parse(localStorage.getItem(key))
};
export const saveJSON = (value: number, data: object) => {
    const key = value.toString();
    localStorage.setItem(key, JSON.stringify(data))
};

export const ListBooks = () => {
    const {fetch: books, loading, error} = useTypedSelector(state => state.books);
    const Book = memo(BookTemplate);

    useEffect(() => {
        return localStorage.clear()
    }, []);

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
                                 book={el}/>
                })}
            </div>
        </>
    );
}