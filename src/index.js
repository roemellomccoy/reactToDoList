import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Username from './App';
import ToDoList from './taskList'
import reportWebVitals from './reportWebVitals';
import Modal from 'react-modal';

ReactDOM.render(
  <React.StrictMode>
    <Username />
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
