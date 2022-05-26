import {FormEvent} from "react";
import {action, makeObservable, observable} from "mobx";
import {keyToken} from "../../Utils";

interface IPostFormDataJson {
    fromData: FormData;
}

interface IErrorValidate {
    login: string[];
    email: string[];
}


export const loadJSON = (key: string | null) =>
    // @ts-ignore
    key && localStorage.getItem(key);
export const saveJSON = (key: string, data: string) =>
    localStorage.setItem(key, data);

class AuthMobx {
    error: IErrorValidate | null = null;
    token = ''
    favBooks: number[] | null | undefined = [];

    constructor() {
        makeObservable(this, {
            submit: action,
            error: observable,
            favBooks: observable,
            token: observable,
            clearToken: action,
            editFavBooks: action
        })
    }

    clearToken() {
        this.token = ''
        localStorage.clear()
    }

    async submit(e: FormEvent<HTMLFormElement>) {
        const form = e.currentTarget;
        const fromData = new FormData(form);
        await this.postFormDataJson({fromData});
    }

    async postFormDataJson({fromData}:IPostFormDataJson) {
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
                    this.token = data.data.token
                    saveJSON(keyToken, data.data.token)
                    this.favUserBooks();
                });
        } else {
            data.json()
                .then(data => {
                   this.error = data;
                });
        }
    }

    async favUserBooks() {
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${loadJSON(keyToken)}`
            }
        }
        await fetch('https://mobile.fakebook.press/api/favorite-books',
            opts)
            .then(data => data.json())
            .then(data => {
                const books = data.data.reduce((acc: number[], el: {id: number}) => {
                    acc.push(el.id);
                    return acc;
                },[]);
                this.favBooks = books;
            });
    }

    editFavBooks(value: number[] | null | undefined) {
        this.favBooks = value
    }
}

export default new AuthMobx()