import {action, makeObservable, observable} from "mobx";
import {FormEvent} from "react";
import {IErrorValidate} from "./RegReducer";

class RegMobx {
    loading = false
    error: IErrorValidate | null = null
    fetch = null

    constructor() {
        makeObservable(this, {
            submit: action,
            loading: observable,
            error: observable
        })
    }

   async submit(e: FormEvent<HTMLFormElement>) {
        const form = e.currentTarget;
        const fromData = new FormData(form);
        const plainFormData = Object.fromEntries(fromData.entries());
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({plainFormData})
        };

        this.loading = true

        const data = await fetch('https://mobile.fakebook.press/api/register', requestOptions);

        if (data.ok) {
           await data.json().then(data => this.fetch = data)
        } else {
            await data.json().then(data => this.error = data)
        }
    }
}

export default new RegMobx()