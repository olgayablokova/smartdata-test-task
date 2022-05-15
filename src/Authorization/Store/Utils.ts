import {actionCreatorAuth} from "./Reducer";

export const submit = async (e, dispatch) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fromData = new FormData(form);
    await postFormDataJson({fromData, dispatch});
}

const postFormDataJson = async({fromData, dispatch}) => {
    const plainFormData = Object.fromEntries(fromData.entries());
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(plainFormData)
    }
    const data = await fetch('https://mobile.fakebook.press/api/login', opts);

    if (data.ok) {
        data.json()
            .then(data => {
                dispatch(actionCreatorAuth(data.data.token));
                favUserBooks(data.data.token, dispatch);
            });
    }
    //TODO обработать ошибку авторизации
}

const favUserBooks = async (token: string, dispatch) => {
    const opts = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    await fetch('https://mobile.fakebook.press/api/favorite-books',
        opts)
        .then(data => data.json())
        .then(data => {
           const books = data.data.reduce((acc, el) => {
                acc.push(el.id);
                return acc;
            },[]);
            dispatch({type: 'FETCH_FAV', payload: books});
        });
}