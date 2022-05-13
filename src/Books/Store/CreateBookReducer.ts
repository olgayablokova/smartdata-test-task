const DEFAULT_STATE: IState = {
    name: '',
    author_id: null,
    desc: '',
    publication_date: ''
};

interface IState {
    name: string
    author_id: null | number,
    desc: string,
    publication_date: string
}

interface IFetchCreateBook {
    type: 'FETCH_CREATE_BOOK',
    payload: IState
}

export const CreateBookReducer = (
    state = DEFAULT_STATE,
    action: IFetchCreateBook)
    : IState => {
    switch (action.type) {
        case "FETCH_CREATE_BOOK":
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const createBookAction = (value: object) => {
    return {type: "FETCH_CREATE_BOOK", payload: value}
}