import React from 'react';
import ReactDOM from 'react-dom';

class ToDoItemView extends React.Component {

	render() {
		return <li>
			<input type="checkbox" name="completed"
				id="completed" value={this.state.completed}
				onChange="this.onChange" />
			{this.props.todo.task}
		</li>;
	}

}

class ToDoItemEdit extends React.Component {

	render() {
		return <li>
			<input type="checkbox" name="completed"
				id="completed" value={this.state.completed}
				onChange={this.onChange} />
			<input type="text" name="task" id="task"
				value={this.state.todo.task} onChange={this.onChange} />
		</li>;
	}


}

class ToDoList extends React.Component {

}

class ToDos extends React.Component {

	render() {

		return <form>



		</form>;


	}

}




ReactDOM.render(< />, document.querySelector('main'));