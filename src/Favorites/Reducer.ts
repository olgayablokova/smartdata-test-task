import {Dispatch} from "redux";
import {TOKEN} from "../Utils";

const DEFAULT_STATE: IState = {
    status: false
}

type IAction = IEDIT;

interface IEDIT {
    type: 'EDIT',
    payload: boolean
}

interface IState {
    status: boolean
}

export const FaReducer = (state= DEFAULT_STATE, action: IAction): IState => {
    switch (action.type) {
        case 'EDIT': return {status: action.payload};
        default: return state;
    }
}

export const EditFavorite = (id: number, value: boolean) => {
    return async (dispatch: Dispatch<IAction>) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        };
        const edit = value ? 'add-to-favorites' : 'remove-from-favorites';
        const url = `https://mobile.fakebook.press/api/books/${id}/${edit}`;
        await fetch(url, options)
            .then(data=>data.json())
            .then(()=>dispatch({type: 'EDIT', payload: value}));
    }
}