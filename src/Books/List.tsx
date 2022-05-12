import React, {memo, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Template/Registration";
import {BookTemplate} from './BookTemplate';
import {CreateBook} from './CreateBook';
import {fetchData} from "./Store/Utils";

export const List = () => {
    const {fetch: books, loading, error} = useTypedSelector(state => state.books);
    const dispatch = useDispatch();
    const Book = memo(BookTemplate);

    useEffect(() => {
       fetchData({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }, dispatch);
    }, []);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <CreateBook/>
            <div>
                {books.map(el => {
                    return <Book key={el.id} book={el}/>
                })}
            </div>
        </>
    );
}