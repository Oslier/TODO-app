import React from "react"
import Todo from './todo'

function TodoList({todos}) {
    return(

        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo text={todo.text} id={todo.id}/>
                ))}
            </ul>
        </div>

    );
}

export default TodoList;