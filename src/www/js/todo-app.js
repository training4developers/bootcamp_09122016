import React from 'react';
import ReactDOM from 'react-dom';

class BaseFormComponent extends React.Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.multiple
				? Array.from(e.target.options)
					.filter(option => option.selected).map(option => option.value) 
				: e.target.type === 'checkbox'
					? e.target.checked
					: e.target.value
		});
	}
}

class ToDoItemView extends BaseFormComponent {

	constructor(props) {
		super(props);

		this.state = {
			completed: props.todo.completed
		};

		this.editToDo = this.editToDo.bind(this);
	}

	editToDo() {
		this.props.editToDo(this.props.todo.id);
	}

	render() {
		return <li>
			<input type="checkbox" name="completed"
				id="completed" value={this.state.completed}
				onChange={this.onChange} />
			<span onClick={this.editToDo}>{this.props.todo.task}</span>
		</li>;
	}

}

ToDoItemView.propTypes = {
	editToDo: React.PropTypes.func,
	todo: React.PropTypes.shape({
		id: React.PropTypes.number,
		task: React.PropTypes.string,
		due: React.PropTypes.instanceOf(Date)
	}).isRequired
};

class ToDoItemEdit extends BaseFormComponent {

	constructor(props) {

		super(props);

		this.state = {
			completed: props.todo.completed,
			task: props.todo.task
		};

		this.doneToDo = this.doneToDo.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
	}

	doneToDo(e) {

		switch(e.keyCode) {
			case 13:
				this.props.saveToDo({
					id: this.props.todo.id,
					task: this.state.task,
					completed: this.state.completed
				});
				break;
			case 27:
				this.props.cancelEditToDo();
				break;
		}

	}

	cancelEdit() {
		this.props.cancelEditToDo();
	}

	componentDidMount() {
		this._taskInput.focus();
	}

	render() {
		return <li>
			<input type="checkbox" name="completed"
				id="completed" value={this.state.completed}
				onChange={this.onChange} />
			<input type="text" name="task" id="task"
				value={this.state.task} ref={c => this._taskInput = c}
				onChange={this.onChange} onKeyUp={this.doneToDo} onBlur={this.cancelEdit} />
		</li>;
	}

}

class ToDoList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editToDoId: 0
		};

		this.editToDo = this.editToDo.bind(this);
		this.saveToDo = this.saveToDo.bind(this);
		this.cancelEditToDo = this.cancelEditToDo.bind(this);
	}

	editToDo(toDoId) {

		this.setState({
			editToDoId: toDoId
		});

	}

	saveToDo(todo) {

		this.props.saveToDo(todo);

		this.setState({
			editToDoId: 0
		});
	}

	cancelEditToDo() {
		this.setState({
			editToDoId: 0
		});
	}

	render() {

		return <ul>
			{this.props.todos.map(todo => this.state.editToDoId === todo.id
				? <ToDoItemEdit key={todo.id} todo={todo} saveToDo={this.saveToDo} cancelEditToDo={this.cancelEditToDo} />
				: <ToDoItemView key={todo.id} todo={todo} editToDo={this.editToDo} />)}
		</ul>;

	}

}

ToDoList.propTypes = {
	todos: React.PropTypes.array,
	saveToDo: React.PropTypes.func
};

class ToDos extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{id: 1, task: 'Task 1', completed: true },
				{id: 2, task: 'Task 2', completed: false },
				{id: 3, task: 'Task 3', completed: false }
			]
		};

		this.saveToDo = this.saveToDo.bind(this);
	}

	saveToDo(todo) {

		const todoIndex = this.state
			.todos.indexOf(this.state.todos.find(t => t.id === todo.id));


		this.setState({
			todos: this.state.todos
				.slice(0, todoIndex).concat(todo)
				.concat(this.state.todos.slice(todoIndex + 1))
		});
	}

	render() {
		return <ToDoList todos={this.state.todos} saveToDo={this.saveToDo} />;
	}

}

ReactDOM.render(<ToDos />, document.querySelector('main'));

// class ViewRow extends React.Component {

// 	render() {

// 		return <tr>
// 			<td>{this.props.widget.name}</td>
// 			<td>{this.props.widget.color}</td>
// 			<td>{this.props.widget.size}</td>
// 			<td>{this.props.widget.quantity}</td>
// 		</tr>;

// 	}


// }

// class EditRow extends React.Component {

// 	render() {

// 		return <tr>
// 			<td><input type="text" value={this.state.widgetName} onChange={this.onChange} /></td>
// 			<td><input type="text" value={this.state.widgetColor} onChange={this.onChange} /></td>
// 			<td><input type="text" value={this.state.widgetSize} onChange={this.onChange} /></td>
// 			<td><input type="text" value={this.state.widgetQuantity} onChange={this.onChange} /></td>
// 		</tr>;

// 	}


// }


