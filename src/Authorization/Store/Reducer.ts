interface IErrorValidate {
    login: string[];
    email: string[];
}

interface IAuthorizationState {
    token: string;
    error: IErrorValidate | null;
}

interface IFetchAuth {
    type: 'FETCH_AUTH',
    payload: string
}

interface IErrorAuth {
    type: 'ERROR_AUTH',
    payload: IErrorValidate | null
}

export type ActionAuthType = IFetchAuth | IErrorAuth;

const DEFAULT_STATE: IAuthorizationState = {
    token: '',
    error: null
}

export const AuthorizationReducer = (
    state = DEFAULT_STATE,
    action: ActionAuthType): IAuthorizationState => {
    switch (action.type) {
        case 'FETCH_AUTH': return {...state, token: action.payload};
        case 'ERROR_AUTH': return {...state, error: action.payload};
        default: return state;
    }
}