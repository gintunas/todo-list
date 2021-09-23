import React from 'react';
import '../index.css';

function TodoListItem(props) {

	function onClickClose() {
		let index = parseInt(props.index);
		props.removeItem(index);		// calls method from TodoApp, the parent. Method came via props 
	}

	function onClickDone() {
		let index = parseInt(props.index);
		props.markTodoDone(index);
	}

	let isDoneCss = props.item.done ?
		"done" : "undone";

	let todoDivCss = isDoneCss + " todoDiv";

	return (
		<li className="list-group-item ">
			<div className={todoDivCss}>
				<input
					className="todoCheckbox hoverElement"
					type="checkbox"
					onChange={onClickDone}
					checked={props.item.done} />

				{props.item.value}

				<button
					className="hoverElement delButton"
					type="button"
					onClick={onClickClose} >
					❌
				</button>
			</div>
		</li>
	);
}

export default TodoListItem