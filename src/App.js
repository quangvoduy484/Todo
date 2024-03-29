import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import VisibilityFilters from './Todo/VisibilityFilters'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <AddTodo/>
        <TodoList />
        <VisibilityFilters/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
