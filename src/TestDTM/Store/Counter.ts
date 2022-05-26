import {action, makeObservable, observable} from "mobx";

class Counter {
    count = 0;

    constructor() {
        makeObservable(this, {
            count: observable,
            inc: action,
            dec: action
        });
    }

    inc() {
        this.count = this.count + 1;
    }

    dec() {
        this.count = this.count - 1;
    }
}

export default new Counter();