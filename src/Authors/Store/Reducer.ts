const STATE_DEFAULT: IStateAuthors = {
    loading: false,
    error: false,
    fetch: []
}

interface IStateAuthors {
    loading: boolean,
    error: null | boolean,
    fetch: [] | object[]
}

export type IAction = ILoading | IError | IFetch;

interface ILoading {
    type: ActionTypeAuthors.LOADINGA;
    payload: boolean;
}

interface IFetch {
    type: ActionTypeAuthors.FETCHA;
    payload: [] | object[]
}

interface IError {
    type: ActionTypeAuthors.ERRORA;
    payload: boolean;
}

export enum ActionTypeAuthors {
    FETCHA = 'FETCHA',
    ERRORA = 'ERRORA',
    LOADINGA = 'LOADINGA'
}

export interface IRecord {
    id: number;
    name: string;
    birth_date: string;
    died_date: string;
    image: string;
}

export const Reducer = (state = STATE_DEFAULT, action: IAction): IStateAuthors => {
    switch(action.type) {
        case ActionTypeAuthors.FETCHA: return {...state, loading: false, fetch: Array.isArray(action.payload) ?
                [...state.fetch, ...action.payload] : [...state.fetch, action.payload]};
        case ActionTypeAuthors.LOADINGA: return {...state, loading: action.payload};
        case ActionTypeAuthors.ERRORA: return {...state, error: true, loading: false};
        default: return state;
    }
}
