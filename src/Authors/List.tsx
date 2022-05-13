import React, {memo} from 'react'
import {useTypedSelector} from "../Utils";
import {AuthorTemplate} from './AuthorTemplate';
import {CreateAuthor} from './CreateAuthor';

export const List = () => {
    const {fetch: authors, loading, error} = useTypedSelector(state => state.authors);
    const PureTable = memo(AuthorTemplate);

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