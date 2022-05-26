import {makeObservable, observable} from "mobx";

class FaMobx {
    status = false;
    favBooksUser: number[] | null = null;

    constructor() {
        makeObservable(this, {
            status: observable,
            favBooksUser: observable
        })
    }

    async editFavorite(id: number, value: boolean, token: string) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        const edit = value ? 'add-to-favorites' : 'remove-from-favorites';
        const url = `https://mobile.fakebook.press/api/books/${id}/${edit}`;
        await fetch(url, options)
            .then(() => this.status = value);
    }
}

export default new FaMobx()