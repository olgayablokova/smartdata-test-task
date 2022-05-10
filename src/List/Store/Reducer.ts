
const STATE_DEFAULT: IState = {
    authors: null
}

interface IState {
    authors: null | IRecord[];
}

type IAction = IFETCH;

interface IFETCH {
    type: ActionType.FETCH;
    payload: IRecord[]
}

export interface IRecord {
    id: number;
    name: string;
    birth_date: string;
    died_date: string;
    image: string;
}

export enum ActionType {
    FETCH = 'FETCH'
}

export const Reducer = (state = STATE_DEFAULT, action: IAction): IState => {
    switch(action.type) {
        case ActionType.FETCH: return {authors: action.payload};
        default: return state;
    }
}
