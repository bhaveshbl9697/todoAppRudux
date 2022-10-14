import React from 'react';
import './Todo.css';
import { RiDeleteBinFill } from "react-icons/ri";
import { VscCheckAll } from "react-icons/vsc";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const updateEditTodo = (edit) => {
        updateTodo(edit.id, edit.value, edit.dateTime);
    }
    const toggleEditMode = (todoId) => {
        debugger;
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.editMode = !todo.editMode;
            }
            return todo;
        });
        updateEditTodo(newTodos);
    };

    const editTodo = (todoId, todoTitle) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.text = todoTitle;
            }
            return todo;
        });

        updateEditTodo(newTodos);
    };

    return (
        <div>
            <div>

                {todos.map((todo, index) => (
                    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                        {todo.editMode ? (
                            <input
                                onChange={(e) => {
                                    editTodo(todo.id, e.target.value);
                                }}
                                value={todo.text}
                            />
                        ) : (
                            todo.text
                        )}
                        {todo.editMode ? (
                            <div key={todo.id}>
                                <button onClick={() => { toggleEditMode(todo.id); }} >
                                    Close Edit Mode
                                </button>
                            </div>
                        ) : (
                            <><div key={todo.id}>
                                <TiEdit
                                    onClick={() => { toggleEditMode(todo.id); }}
                                    title='Click me! If u want to Edit TODO '
                                    className='edit-icon' />
                                <VscCheckAll
                                    onClick={() => completeTodo(todo.id)}
                                    title='Click me! If u want to Complete TODO '
                                    className='complete-icon' />
                                <RiDeleteBinFill
                                    onClick={() => removeTodo(todo.id)}
                                    title='Click me! If u want to Delete TODO '
                                    className='delete-icon' />
                            </div>
                                {todo.dateTime}
                                
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Todo;
