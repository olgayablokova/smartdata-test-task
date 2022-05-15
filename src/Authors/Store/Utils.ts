import {ActionTypeAuthors, IAction} from "./Reducer";
import {Dispatch} from "redux";
import {useTypedSelector} from "../../Utils";

interface IUserInfo {
    name: string;
    bio: string;
    birth_date: string;
}

export const fetchData = async (requestOptions: object, dispatch: Dispatch<IAction>) => {
    dispatch({type: ActionTypeAuthors.LOADINGA, payload: true});

    const data = await fetch('https://mobile.fakebook.press/api/authors',
        requestOptions);

    data.ok ?
        data.json().then(data => {
            dispatch({type: ActionTypeAuthors.LOADINGA, payload: false});
            return dispatch({type: ActionTypeAuthors.FETCHA, payload: data.data});
        }) : dispatch({type: ActionTypeAuthors.ERRORA, payload: true});
}

export const addAuthor = (userInfo: IUserInfo) => {
    return async (dispatch: Dispatch<IAction>) => {
        const {token} = useTypedSelector(state => state.user);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userInfo)
        };
        await fetchData(requestOptions, dispatch);
    }
}