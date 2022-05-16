import React, {memo} from 'react'
import {useTypedSelector} from "../Utils";
import {AuthorTemplate} from './AuthorTemplate';
import {CreateAuthor} from './CreateAuthor';
import './Authors.css';

export const List = () => {
    const {fetch: authors, loading, error} = useTypedSelector(state => state.authors);
    const {token} = useTypedSelector(state => state.user);
    const PureTable = memo(AuthorTemplate);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>error</div>;
    }

    return (
        <div>
            {token && <CreateAuthor token={token}/>}
            <div className="Author__List">
            {authors.map(el => {
               return <PureTable key={el.id} author={el}/>
            })}
            </div>
        </div>
    );
}