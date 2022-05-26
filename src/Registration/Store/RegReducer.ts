export interface IErrorValidate {
    email: string[];
    password: string[];
    name: string[];
}

interface IStateReg {
    loading: boolean,
    error: IErrorValidate | null,
    fetch: {}
}

const defaultState: IStateReg = {
    loading: false,
    error: null,
    fetch: {}
}

export enum ActionTypeReg {
    ERROR_REG = 'ERROR_REG',
    FETCH_REG = 'FETCH_REG',
    LOADING_REG = 'LOADING_REG'
}

interface IERROR_REG {
    type: ActionTypeReg.ERROR_REG,
    payload: IErrorValidate | null
}

interface IFETCH_REG {
    type: ActionTypeReg.FETCH_REG,
    payload: object
}

interface ILOADING_REG {
    type: ActionTypeReg.LOADING_REG,
    payload: boolean
}

export type IActionReg = IERROR_REG | IFETCH_REG | ILOADING_REG;

export const RegReducer = (state = defaultState, action: IActionReg): IStateReg => {
    switch (action.type) {
        case ActionTypeReg.ERROR_REG:
            return {...state, error: action.payload};
        case ActionTypeReg.FETCH_REG:
            return {...state, loading: false, fetch: action.payload};
        case ActionTypeReg.LOADING_REG:
            return {...state, loading: true};
        default: return state;
    }
}
