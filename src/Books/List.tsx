import React from 'react';
import {CreateBook} from './CreateBook';
import {ListBooks} from './ListBooks';
import {Filter} from "../Filter/Filter";
import {useTypedSelector} from "../Utils";
import './Books.css';

export const List = () => {
    const {token} = useTypedSelector(state => state.user);
    return (
        <div>
            {token &&
                <div className="Book__el">
                    <CreateBook token={token}/>
                    <Filter/>
                </div>
            }
            <ListBooks/>
        </div>
    );
}