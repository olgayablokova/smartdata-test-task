import {RegReducer} from "../Registration/Store/RegReducer";
import { legacy_createStore as createStore} from 'redux'
import {applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {Reducer as ReducerAuthor} from "../Authors/Store/Reducer";
import {Reducer as ReducerBooks} from "../Books/Store/Reducer";
import {DEFAULT_STATE, FaReducer} from "../Favorites/Reducer";
import {FilterReducer} from "../Filter/Reducer";
import {CreateBookReducer} from "../Books/Store/CreateBookReducer";
import {AuthorizationReducer} from "../Authorization/Store/Reducer";
import {CreateAuthorReducer} from "../Authors/Store/CreateAuthorReducer";

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const RootReducer = combineReducers ({
    RegReducer,
    authors: ReducerAuthor,
    books: ReducerBooks,
    favorites: FaReducer,
    filter: FilterReducer,
    createBook: CreateBookReducer,
    createAuthor: CreateAuthorReducer,
    user: AuthorizationReducer
});


// export const store = createStore(RootReducer, applyMiddleware(thunk));

export const store = configureStore({
    reducer: RootReducer,
    middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
