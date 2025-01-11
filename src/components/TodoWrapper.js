import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoWrapper.css';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newValue) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newValue } : todo)));
    setEditTodo(null);
  };

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        setEditTodo={setEditTodo}
      />
    </div>
  );
};

export default TodoWrapper;
