import "./styles.css";
import { Counter } from "./Counter";
import { Todo } from "./Todo";

import {injectStores} from "@mobx-devtools/tools";
import counter from "./Store/Counter";
import todo from "./Store/Todo";

injectStores({
    counter,
    todo
});

export const App = () => {
    return (
        <div className="App">
            <Counter />
            <Todo />
        </div>
    );
}