import React from 'react';
import {CreateBook} from './CreateBook';
import {ListBooks} from './ListBooks';
import {Filter} from "../Filter/Filter";
import './Books.css';

import authMobx from "../Authorization/Store/AuthMobx";
import {observer} from "mobx-react-lite";

const ListTml = () => {
    const token = authMobx.token;
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

export const List = observer(ListTml)