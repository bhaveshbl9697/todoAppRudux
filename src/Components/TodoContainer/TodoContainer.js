import React from 'react';
import './TodoContainer.css'
import TodoList from "../TodoList/TodoList";

function TodoContainer() {

    return (
        <div className="TodoContainer">
            <TodoList />
        </div>
    );
}

export default TodoContainer;