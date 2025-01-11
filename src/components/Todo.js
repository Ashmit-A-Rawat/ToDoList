import React from 'react';
import './Todo.css';

const Todo = ({ todos, removeTodo, toggleComplete, setEditTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <span onClick={() => toggleComplete(todo.id)} className="todo-text">
            {todo.text}
          </span>
          <div className="todo-actions">
            <button
              onClick={() => setEditTodo(todo)}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
