import React from 'react';
import '../index.css';

function TodoForm(props) {

	const nameInputRef = React.createRef();
	const formRef = React.createRef();

	function onSubmit(event) {
		event.preventDefault();		// keeps page from refreshing. It refreshes  on form submit by default
		let newItemValue = nameInputRef.current.value;

		if (newItemValue) {
			props.addItem({ newItemValue });
			formRef.current.reset();		// resets all fields of the form, clears all values
		}
	}

	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			className='todoForm' >

			<input
				type="text"
				ref={nameInputRef}
				className="todoInput"
				placeholder="Add a new todo..." />

			<button
				className='addButton hoverElement'
				type="submit" >
				➕
			</button>
		</form>
	);
}

export default TodoForm;