import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';

let todoItems = [];

// let myStorage = window.sessionStorage;		//didn't have time to finish :(
// let todoItems = myStorage.getItem('initialItems');

ReactDOM.render(
	<TodoApp initItems={todoItems} />,
	document.getElementById('root')
);