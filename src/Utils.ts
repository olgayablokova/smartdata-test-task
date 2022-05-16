import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "./Store/Index";
import {useState} from "react";

type RootState = ReturnType<typeof RootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

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