const DEFAULT_STATE:IState = {
    author_id: 0
}

interface IState {
    author_id: number
}

interface IAction {
    type: 'EDIT',
    payload: number
}

export const FilterReducer = (state = DEFAULT_STATE, action: IAction): IState => {
    switch (action.type) {
        case "EDIT": return {author_id: action.payload};
        default: return state;
    }
}
