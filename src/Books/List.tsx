import React from 'react';
import {CreateBook} from './CreateBook';
import {List as ListAll} from './LiastAll';
import {Filter} from "../Filter/Filter";

export const List = () => {

    return (
        <>
            <CreateBook/>
            <Filter/>
            <ListAll/>
        </>
    );
}