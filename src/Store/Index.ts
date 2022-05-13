import {RegReducer} from "./RegReducer";
import { legacy_createStore as createStore} from 'redux'
import {applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {Reducer as ReducerAuthor} from "../Authors/Store/Reducer";
import {Reducer as ReducerBooks} from "../Books/Store/Reducer";
import {FaReducer} from "../Favorites/Reducer";
import {FilterReducer} from "../Filter/Reducer";
import {CreateBookReducer} from "../Books/Store/CreateBookReducer";

export const RootReducer = combineReducers ({
    RegReducer,
    authors: ReducerAuthor,
    books: ReducerBooks,
    favorites: FaReducer,
    filter: FilterReducer,
    createBook: CreateBookReducer
});

export const store = createStore(RootReducer, applyMiddleware(thunk));