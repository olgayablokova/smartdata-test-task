import {useState} from "react";

export const useInput = (value: string) => {
    const [state, setState] = useState(value);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setState(e.target.value);
    }

    return {
        state,
        onChange
    }
}

export const navItem = [{
    to: "authorization",
    name: "Авторизация"
}, {
    to: "registration",
    name: "Регистрация"
}, {
    to: "authors",
    name: "Список авторов"
}, {
    to: "books",
    name: "Список книг"
}]

export const keyToken = 'token';