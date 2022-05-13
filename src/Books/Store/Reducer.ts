const STATE_DEFAULT: IStateBook = {
    loading: false,
    error: false,
    fetch: []
}

interface IStateBook {
    loading: boolean,
    error: null | boolean,
    fetch: [] | object[]
}

export type IAction = ILoading | IError | IFetch | IFetchFilter;

interface ILoading {
    type: ActionTypeBook.LOADINGB;
    payload: boolean;
}

interface IError {
    type: ActionTypeBook.ERRORB;
    payload: boolean
}

interface IFetch {
    type: ActionTypeBook.FETCHB;
    payload: object[]
}

interface IFetchFilter {
    type: ActionTypeBook.FETCHFILTER;
    payload: []
}

export interface IUserInfo {
    name: string;
    author_id: number;
    desc: string;
    publication_date: string
}

export enum ActionTypeBook {
    FETCHB = 'FETCHB',
    ERRORB = 'ERRORB',
    LOADINGB = 'LOADINGB',
    FETCHFILTER = 'FETCHFILTER'
}

export const Reducer = (state = STATE_DEFAULT, action: IAction): IStateBook => {
    switch(action.type) {
        case ActionTypeBook.LOADINGB: return {...state, loading: action.payload};
        case ActionTypeBook.FETCHB:
            return {...state, loading: false, fetch: Array.isArray(action.payload) ?
                    [...state.fetch, ...action.payload] : [...state.fetch, action.payload]};
        case ActionTypeBook.ERRORB:
            return {...state, error: true, loading: false};
        case ActionTypeBook.FETCHFILTER:
            return {...state, fetch: action.payload};
        default: return state;
    }
}
