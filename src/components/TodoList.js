import React from 'react';
import TodoListItem from "./TodoListItem";

function TodoList(props) {
	let items = props.items.map((item, index) =>
	(
		<TodoListItem
			item={item}
			key={index} 	// keys help React identify which items have changed, are added, or are removed inside the array. Should be unique
			index={index}
			removeItem={props.removeItem}		// passes function further down, which it gets from parent, to its child
			markTodoDone={props.markTodoDone} />
	)
	);

	return (
		<ul>
			{items}
		</ul>
	);
}

export default TodoList;