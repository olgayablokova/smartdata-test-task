
const STATE_DEFAULT: IStateB = {
    books: null
}

interface IStateB {
    books: null | IRecordB[];
}

type IAction = IFETCH;

interface IFETCH {
    type: ActionTypeB.FETCH;
    payload: IRecordB[]
}

export interface IRecordB {
    id: number;
    name: string;
    desc: string;
    author_id: number;
    image: string;
}

export enum ActionTypeB {
    FETCH = 'FETCH'
}

export const ReducerBooks = (state = STATE_DEFAULT, action: IAction): IStateB => {
    switch(action.type) {
        case ActionTypeB.FETCH: return {books: action.payload};
        default: return state;
    }
}
