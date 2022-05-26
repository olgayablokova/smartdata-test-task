import {action, makeObservable, observable} from "mobx";

interface ITodo {
    title: string;
    completed: boolean;
    id: number
}

class Todo {
    todos: ITodo[] = [];

    constructor() {
        makeObservable(this,{
            todos: observable,
            removeTodos: action,
            completeTodo: action,
            fetchTodos: action
        });
    }

    removeTodos(id: number) {
        this.todos = this.todos.filter((el) => el.id !== id);
    }

    completeTodo(id: number) {
        this.todos = this.todos.map((el) =>
            el.id === id ? { ...el, completed: !el.completed } : el
        );
    }

    async fetchTodos() {
        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then((data) => data.json())
            .then(data => this.todos = data);
    }
}

export default new Todo()