import {Dispatch} from "redux";

const DEFAULT_STATE: IState = {
    status: false,
    favBooksUser: null
}

export type IActionFav = IEDIT | FETCH_FAV;

interface IEDIT {
    type: 'EDIT',
    payload: boolean
}

interface FETCH_FAV {
    type: 'FETCH_FAV',
    payload: number[] | null
}

interface IState {
    status: boolean;
    favBooksUser: number[] | null

}

export const FaReducer = (state= DEFAULT_STATE, action: IActionFav): IState => {
    switch (action.type) {
        case 'EDIT': return {...state, status: action.payload};
        case 'FETCH_FAV': return {...state, favBooksUser: action.payload}
        default: return state;
    }
}

export const EditFavorite = (id: number, value: boolean, token: string) => {
    return async (dispatch: Dispatch<IActionFav>) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        const edit = value ? 'add-to-favorites' : 'remove-from-favorites';
        const url = `https://mobile.fakebook.press/api/books/${id}/${edit}`;
        await fetch(url, options)
            .then(() => dispatch({type: 'EDIT', payload: value}));
    }
}