const DEFAULT_STATE: IAuthorizationState = {
    token: '',

}

interface IAuthorizationState {
    token: string
}

interface IFetchAuth {
    type: 'FETCH_AUTH',
    payload: string
}

export const AuthorizationReducer = (
    state = DEFAULT_STATE,
    action: IFetchAuth): IAuthorizationState => {
    switch (action.type) {
        case 'FETCH_AUTH': return {token: action.payload};
        default: return state;
    }
}

export const actionCreatorAuth = (value: string) => {
    return {type: 'FETCH_AUTH', payload: value}
}