import React from 'react';
import {CreateBook} from './CreateBook';
import {ListBooks} from './ListBooks';
import {Filter} from "../Filter/Filter";

export const List = () => {

    return (
        <>
            <CreateBook/>
            <Filter/>
            <ListBooks/>
        </>
    );
}