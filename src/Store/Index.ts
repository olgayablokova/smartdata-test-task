import {RegReducer} from "./RegReducer";
import { legacy_createStore as createStore} from 'redux'
import {applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {Reducer as ReducerAuthor} from "../Authors/Store/Reducer";
import {Reducer as ReducerBooks} from "../Books/Store/Reducer";

const reducer = combineReducers ({
    RegReducer,
    authors: ReducerAuthor,
    books: ReducerBooks
});

export type RootState = ReturnType<typeof reducer>;

export const store = createStore(reducer, applyMiddleware(thunk));