import React from 'react';

interface IState {
    userId: null | number;
    error: null | string[];
    user: IUser;
}

interface IUser {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

const defaultState: IState = {
    user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    },
    userId: null,
    error: null
}

export enum ActionType {
    error = 'error',
    fetchData = 'fetchData',
    editUser = 'editUser'
}

interface Error {
    type: ActionType.error,
    payload: string[] | null
}

interface Fetch {
    type: ActionType.fetchData,
    payload: number
}

interface EditUser {
    type: ActionType.editUser,
    payload: IUser
}

export type IAction = Error | Fetch | EditUser;

export const RegReducer = (state = defaultState, action: IAction): IState => {
    switch (action.type) {
        case ActionType.error: return {...state, error: action.payload};
        case ActionType.fetchData: return {...state, userId: action.payload, error: null};
        case ActionType.editUser: return {...state, user: {...state.user, ...action.payload}};
        default: return state;
    }
}
