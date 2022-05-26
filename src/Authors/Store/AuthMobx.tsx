import {IRecord} from "./Reducer";
import {action, makeObservable, observable} from "mobx";
import {FormEvent} from "react";

class AuthorsMobx {
    fetch: IRecord[] = []
    loading = false
    error: boolean | null = false

    constructor() {
       makeObservable(this, {
           fetchData: action,
           addAuthor: action,
           fetch: observable,
           loading: observable,
           error: observable
       })
    }

    fetchData(requestOptions: object) {
        this.loading = true

        fetch('https://mobile.fakebook.press/api/authors',
            requestOptions)
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
                    this.fetch = data.data
                } else {
                    this.fetch.push(data.data)
                }
            })
            .catch(() => {
                this.error = true
            })
    }

    async addAuthor(e: FormEvent<HTMLFormElement>, token: string) {
        const plainFormData = this.getPlainFormData(e);
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

    getPlainFormData(e: FormEvent<HTMLFormElement>) {
        const form = e.currentTarget;
        const fromData = new FormData(form);
        return Object.fromEntries(fromData.entries());
    }

    authorDelete(token: string, author_id: number) {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        fetch(`https://mobile.fakebook.press/api/authors/${author_id}`,
            requestOptions)
            .then(() => {
                this.fetch = this.fetch.filter(el => el.id !== author_id)
            })
            .catch(() => {
                this.error = true
            })
    }
}

export default new AuthorsMobx()