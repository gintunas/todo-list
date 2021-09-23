import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function TodoApp(props) {
	const [todoItems, setTodoItems] = useState(props.initItems);

	function addItem(todoItem) {
		let newItem = {					// adds one or more elements to the beginning of an array
			index: todoItems.length + 1,
			value: todoItem.newItemValue,
			done: false
		}
		setTodoItems(todoItems => [...todoItems, newItem])
	}

	function removeItem(itemIndex) {
		setTodoItems(todoItems => (
			todoItems.filter((_, i) => i !== itemIndex) // Filter out the item with the matching index
		));
	}

	function markTodoDone(itemIndex) {
		let todo = todoItems[itemIndex];
		todo.done = !todo.done;
		setTodoItems([
			...todoItems.slice(0, itemIndex),
			todo,
			...todoItems.slice(itemIndex + 1)
		])
	}

	return (
		<div id="main">
			<TodoHeader />
			<TodoList
				items={todoItems}
				removeItem={removeItem}
				markTodoDone={markTodoDone} />

			<TodoForm addItem={addItem} />
		</div>
	);
}

export default TodoApp;