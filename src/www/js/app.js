import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

function reducer(state = 0, action) {

	console.log('running reducer');

	switch(action.type) {
		case 'add':
			return state + action.value;
		case 'subtract':
			return state - action.value;
		default:
			return state;
	}
}

const store = createStore(reducer);

store.subscribe(() => {

	console.log('running subscribed function');
	console.log(store.getState());

});

console.log('dispatching...');
store.dispatch({
	type: 'add',
	value: 2
});
















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