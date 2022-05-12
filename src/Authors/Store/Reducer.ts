const STATE_DEFAULT: IState = {
    loading: false,
    error: false,
    fetch: []
}

interface IState {
    loading: boolean,
    error: null | boolean,
    fetch: [] | object[]
}

export type IAction = ILoading | IError | IFetch;

interface ILoading {
    type: ActionType.LOADING;
    payload: boolean;
}

interface IFetch {
    type: ActionType.FETCH;
    payload: [] | object[]
}

interface IError {
    type: ActionType.ERROR;
    payload: boolean;
}

export enum ActionType {
    FETCH = 'FETCH',
    ERROR = 'ERROR',
    LOADING = 'LOADING'
}

export interface IRecord {
    id: number;
    name: string;
    birth_date: string;
    died_date: string;
    image: string;
}

export const Reducer = (state = STATE_DEFAULT, action: IAction): IState => {
    switch(action.type) {
        case ActionType.FETCH: return {...state, loading: false, fetch: Array.isArray(action.payload) ?
                [...state.fetch, ...action.payload] : [...state.fetch, action.payload]};
        case ActionType.LOADING: return {...state, loading: action.payload};
        case ActionType.ERROR: return {...state, error: true, loading: false};
        default: return state;
    }
}
