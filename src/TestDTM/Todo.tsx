import { observer } from "mobx-react-lite";
import todo from "./Store/Todo";

const TodoTemplate = () => {
    return (
        <>
            <button onClick={() => todo.fetchTodos()}>
                ADD TODOS
            </button>
            <div>
                {todo.todos.map(el => {
                    return (
                        <div key={el.id} className="str">
                            <button className="btn__detele"
                                    onClick={() => {
                                        todo.removeTodos(el.id);
                                    }}>
                                X
                            </button>
                            <input type="checkbox"
                                   checked={el.completed}
                                   onChange={() => {
                                       todo.completeTodo(el.id);
                                   }}/>
                            <label>{el.title}</label>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export const Todo = observer(TodoTemplate);