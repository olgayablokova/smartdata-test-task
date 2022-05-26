import {action, makeObservable, observable} from "mobx";
import {FormEvent} from "react";
import {IRecord} from "./Reducer";

class BooksMobx {
    books: IRecord[] = []
    loading = false
    error: boolean | null = null

    constructor() {
        makeObservable(this, {
            books: observable,
            loading: observable,
            error: observable,
            addBook: action,
            fetchData: action
        })
    }

    fetchData(requestOptions: object, newUrl?: string) {
        this.loading = true

        const url = !newUrl ? 'https://mobile.fakebook.press/api/books' : newUrl;

        fetch(url, requestOptions)
            .then(data => {
                this.loading = false
                if (data.ok) {
                    return data
                }
                throw new Error('Error')
            })
            .then(data => data.json())
            .then(data => {
                if (Array.isArray(data.data)) {
                    this.books = data.data
                } else {
                    this.books.push(data.data)
                }
            })
            .catch(() => {
                this.error = true
            });
    };

    async addBook(e: FormEvent<HTMLFormElement>, token: string) {
        const plainFormData = this.getPlainFormData(e)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(plainFormData)
        };
        await this.fetchData(requestOptions);
    }

    async getAuthorBooks(e: FormEvent<HTMLFormElement>) {
        const {author_id} = this.getPlainFormData(e)
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        if (typeof author_id === 'string' && author_id === 'all') {
            await this.fetchData(requestOptions);
        } else {
            const url = `https://mobile.fakebook.press/api/authors/${author_id}/books`;
            await this.fetchData(requestOptions, url);
        }
    }

    getPlainFormData(e: FormEvent<HTMLFormElement>) {
        const form = e.currentTarget;
        const fromData = new FormData(form);
        return Object.fromEntries(fromData.entries());
    }
}

export default new BooksMobx()