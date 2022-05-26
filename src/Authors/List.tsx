import React, {memo} from 'react'
import {AuthorTemplate} from './AuthorTemplate';
import {CreateAuthor} from './CreateAuthor';
import './Authors.css';

import {authMobx} from "../Store/Index";
import {authorsMobx} from "../Store/Index";
import {observer} from "mobx-react-lite";

const ListTmp = () => {
    const token = authMobx.token;
    const PureTable = memo(AuthorTemplate);

    if (authorsMobx.loading) {
        return <div>loading</div>;
    }

    if (authorsMobx.error) {
        return <div>error</div>;
    }

    return (
        <div>
            {token && <CreateAuthor token={token}/>}
            <div className="Author__List">
            {authorsMobx.fetch.map(el => {
               return <PureTable key={el.id} author={el} token={token}/>
            })}
            </div>
        </div>
    );
}
{/*{token && <FaTrashAlt onClick={() => AuthorsMobx.authorDelete(token, el.id)}/>}*/}
export const List = observer(ListTmp);