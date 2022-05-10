import {RegReducer} from "./RegReducer";
import { legacy_createStore as createStore} from 'redux'
import {applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {Reducer} from "../List/Store/Reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import {ReducerBooks} from "../List/Store/BooksReducer";

const reducer = combineReducers ({
    RegReducer,
    authors: Reducer,
    books: ReducerBooks
});

export type RootState = ReturnType<typeof reducer>;

export const store = createStore(reducer, applyMiddleware(thunk));