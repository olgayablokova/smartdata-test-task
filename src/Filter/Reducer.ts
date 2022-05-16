const DEFAULT_STATE:IState = {
    author_id: null
}

interface IState {
    author_id: number | null
}

interface IAction {
    type: 'EDITFILTER',
    payload: number
}

export const FilterReducer = (state = DEFAULT_STATE, action: IAction): IState => {
    switch (action.type) {
        case "EDITFILTER": return {author_id: action.payload};
        default: return state;
    }
}

export const actionCreateFilter = (value: string) => {
    return {type: "EDITFILTER", payload: value};
}
