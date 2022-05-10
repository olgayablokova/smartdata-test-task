import React, {useEffect} from 'react';
import {ActionType, IRecord} from "./Store/Reducer";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Template/Registration";
import {ActionTypeB, IRecordB} from "./Store/BooksReducer";
import {Table} from './Table';

export const List = () => {
    const {authors} = useTypedSelector(state => state.authors);

    const dispatch = useDispatch();

    useEffect(()=> {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        const fetchData = async() => {
            await fetch('https://mobile.fakebook.press/api/authors',
                requestOptions)
                .then(data => data.json())
                .then(data => {return dispatch({type: ActionType.FETCH, payload: data.data})});
        };

        fetchData();
    }, []);

    if (authors === null || !authors) {
        return <div>loading</div>;
    }

    let authorsId: number[] = authors?.reduce((acc: number[], el) => {
        acc.push(el.id);
        return acc;},[]);

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Дата смерти</th>
                    <th>Фото</th>
                    <th>Книги</th>
                </tr>
                </thead>
                <tbody>
                {authors.map(el => {
                    return <tr key={el.id}>
                        <td>{el.name}</td>
                        <td>{el.birth_date}</td>
                        <td>{el.died_date}</td>
                        <td>
                            <img src={el.image}/>
                        </td>
                        <td>
                            <Table id={authorsId}/>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    );
}