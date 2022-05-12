import React, {memo, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Template/Registration";
import {AuthorTemplate} from './AuthorTemplate';
import {CreateAuthor} from './CreateAuthor';
import {fetchData} from "./Store/Utils";

export const List = () => {
    const {fetch: authors, loading, error} = useTypedSelector(state => state.authors);
    const dispatch = useDispatch();
    const PureTable = memo(AuthorTemplate);

    useEffect(()=> {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        };
        fetchData(requestOptions, dispatch);
    }, []);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>error</div>;
    }

    return (
        <>
            <CreateAuthor/>
            <div>
            {authors.map(el => {
               return <PureTable key={el.id} author={el}/>
            })}
            </div>
        </>
    );
}