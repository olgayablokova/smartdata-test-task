import React, {memo} from 'react'
import {AuthorTemplate} from './AuthorTemplate';
import {CreateAuthor} from './CreateAuthor';
import './Authors.css';

import authMobx from "../Authorization/Store/AuthMobx";
import AuthorsMobx from "./Store/AuthMobx";
import {observer} from "mobx-react-lite";

const ListTmp = () => {
    const token = authMobx.token;
    const PureTable = memo(AuthorTemplate);

    if (AuthorsMobx.loading) {
        return <div>loading</div>;
    }

    if (AuthorsMobx.error) {
        return <div>error</div>;
    }

    return (
        <div>
            {token && <CreateAuthor token={token}/>}
            <div className="Author__List">
            {AuthorsMobx.fetch.map(el => {
               return <PureTable key={el.id} author={el} token={token}/>
            })}
            </div>
        </div>
    );
}
{/*{token && <FaTrashAlt onClick={() => AuthorsMobx.authorDelete(token, el.id)}/>}*/}
export const List = observer(ListTmp);