const DEFAULT_STATE: IState = {
    name: '',
    bio: '',
    birth_date: ''
};

interface IState {
    name: string,
    bio: string,
    birth_date: string
}

interface IFetchCreateAuthor {
    type: 'FETCH_CREATE_AUTHOR',
    payload: IState
}

export const CreateAuthorReducer = (
    state = DEFAULT_STATE,
    action: IFetchCreateAuthor)
    : IState => {
    switch (action.type) {
        case "FETCH_CREATE_AUTHOR":
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const createAuthorAction = (value: object) => {
    return {type: "FETCH_CREATE_AUTHOR", payload: value}
}