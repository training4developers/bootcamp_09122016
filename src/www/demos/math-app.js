import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

function reducer(state = 0, action) {

	switch(action.type) {
		case 'add':
			return state + action.value;
		case 'subtract':
			return state - action.value;
		default:
			return state;
	}
}

class MathComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			operand: 0,
			currentValue: props.store.getState()
		};

		this.onChange = this.onChange.bind(this);
		this.add = this.add.bind(this);
		this.subtract = this.subtract.bind(this);
	}

	componentDidMount() {
		this.unsubscribeStore = this.props.store.subscribe(() => {

			this.setState({
				currentValue: this.props.store.getState()
			});

		});
	}

	componentWillUnmount() {
		this.unsubscribeStore();
	}

	onChange(e) {
		this.setState({
			operand: e.target.value
		});
	}

	add() {
		this.props.store.dispatch({
			type: 'add',
			value: parseInt(this.state.operand, 10)
		});
	}

	subtract() {
		this.props.store.dispatch({
			type: 'subtract',
			value: parseInt(this.state.operand, 10)
		});
	}

	render() {

		return <div>
			<input type="number" id="operand" name="operand" value={this.state.operand} onChange={this.onChange} />
			<button type="button" onClick={this.add}>Add</button>
			<button type="button" onClick={this.subtract}>Subtract</button><br />
			<span>Current: {this.state.currentValue}</span>
		</div>;

	}

}

ReactDOM.render(<MathComponent store={createStore(reducer)} />, document.querySelector('main'));
















// console.log([1,2,3,4,5].reduce(function(previousValue, nextValue) {
// 	console.log(previousValue, nextValue);
// 	return previousValue + nextValue;
// }));

// const actions = [1,2,3,4,5];

// const initialState = 0;

// console.log(initialState);

// // const finalState = actions.reduce(function(state, action) {
// // 	console.log(state, action);
// // 	return state + action;
// // }, initialState);

// function reducer(state, action) {

// 	switch(action.type) {
// 		case 'add':
// 			return state + action.value;
// 		case 'subtract':
// 			return state - action.value;
// 		default:
// 			return state;
// 	}
// }

// let state = reducer(initialState, { type: 'add', value: 1 }); // represents a user action
// console.log(state);
// state = reducer(state, { type: 'subtract', value: 2 }); // represents a user action
// console.log(state);
// state = reducer(state, { type: 'add', value: 3 }); // represents a user action
// console.log(state);
// state = reducer(state, { type: 'add', value: 4 }); // represents a user action
// console.log(state);
// state = reducer(state, { type: 'subtract', value: 5 }); // represents a user action
// console.log(state);