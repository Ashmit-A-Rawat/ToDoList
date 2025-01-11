import React from 'react';
import TodoWrapper from './components/TodoWrapper';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>To-Do List App</h1>
      </header>
      <TodoWrapper />
      
    </div>
  );
}

export default App;
