import React, { useState, useEffect } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo, editTodo, updateTodo }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      updateTodo(editTodo.id, input.trim());
    } else if (input.trim()) {
      addTodo({
        id: Date.now(),
        text: input.trim(),
        completed: false,
      });
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={editTodo ? 'Edit your task' : 'Add a new task'}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        {editTodo ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
