import React, {useEffect, useState} from "react";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionType} from "../Store/RegReducer";
import {RootState} from "../Store";
import {submitForm} from "../Store/AsyncData";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


export function Registration() {
    const {name, password, password_confirmation, email} =
        useTypedSelector(state => state.RegReducer.user);
    const dispatch = useDispatch();

    return (
        <>
            <span>Регистрация</span>
            <form onSubmit={() => dispatch(submitForm({name, password, password_confirmation, email}))}>
                <input type="text"
                       value={name}
                       onChange={(e) => dispatch({
                           type: ActionType.editUser,
                           payload: {name: e.target.value}})}
                       placeholder='Введите имя'
                       required/>
                <input type="text"
                       value={email}
                       onChange={(e) => dispatch({
                           type: ActionType.editUser,
                           payload: {email: e.target.value}})}
                       placeholder='Введите логин'
                       required/>
                <input type="text"
                       value={password}
                       placeholder='Введите пароль'
                       onChange={(e) => dispatch({
                           type: ActionType.editUser,
                           payload: {password: e.target.value}})}
                       required/>
                <input type="text"
                       value={password_confirmation}
                       placeholder='Подтвердите пароль'
                       onChange={(e) => dispatch({
                           type: ActionType.editUser,
                           payload: {password_confirmation: e.target.value}})}
                       required/>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    );
}