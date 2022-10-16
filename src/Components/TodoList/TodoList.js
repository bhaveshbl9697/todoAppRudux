import React, { useState, useEffect } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import Todo from '../Todo/Todo';
import './TodoList.css';
function TodoList() {

    const [todos, setTodos] = useState(() => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        if (!todo.text) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };
    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        setTodos([...todos].filter(todo => todo.id !== id));
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1 class="text-responsive"> Welcome React Todo's  Application </h1>
            <TodoInput onSubmit={addTodo} />
            <h2 class="text-responsive"> Todos  List</h2>
            <Todo
                todos={todos} completeTodo={completeTodo}
                removeTodo={removeTodo} updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;