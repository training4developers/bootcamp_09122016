import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

const getAllWidgets = (dispatch) => {

	dispatch({ type: 'PENDING' });

	fetch('/api/widgets')
		.then(res => res.json())
		.then(results => dispatch({
			type: 'COMPLETED',
			widgets: results
		}));

};

const getAllWidgets2 = (dispatch) => {

	dispatch({
		type: 'COMPLETED',
		widgets: [ { _id: 1, name: 'Test 1' }, { _id: 2, name: 'Test 2' }]
	});

};
 
class WidgetList extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			widgets: [],
			newWidgetName: ''
		};

		this.onChange = this.onChange.bind(this);
		this.addWidget = this.addWidget.bind(this);
	}

	componentDidMount() {

		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState({
				widgets: this.props.store.getState().widgets
			});
		});

		getAllWidgets(this.props.store.dispatch.bind(this.props.store));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addWidget() {
		this.props.store.dispatch({ type: 'PENDING' });

		const newWidget = {
			name: this.state.newWidgetName,
			quantity: 0
		};

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');	

		fetch('/api/widgets', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(newWidget)
		}).then(() => fetch('/api/widgets'))
			.then(res => res.json())
			.then(results => this.props.store.dispatch({
				type: 'COMPLETED',
				widgets: results
			}));
	}

	deleteWidget(widgetId) {
		this.props.store.dispatch({ type: 'PENDING' });
		
		fetch('/api/widgets/' + encodeURIComponent(widgetId), {
			method: 'DELETE'
		}).then(() => fetch('/api/widgets'))
			.then(res => res.json())
			.then(results => this.props.store.dispatch({
				type: 'COMPLETED',
				widgets: results
			}));
	}

	render() {
		return <form>
			<ul>
				{this.state.widgets.map(widget => <li key={widget._id}>
					{widget.name}
					<button type="button" onClick={() => this.deleteWidget(widget._id)}>Delete</button>
				</li>)}
			</ul>
			<label>New Widget Name: </label>
			<input type="text" id="new-widget-name" name="newWidgetName"
				value={this.state.newWidgetName} onChange={this.onChange} />
			<button type="button" onClick={this.addWidget}>Add Widget</button>
		</form>;
	}

}

function reducer(state = { widgets: [] }, action) {

	switch(action.type) {
		case 'PENDING':
			return Object.assign({}, state, {
				widgets: []
			});
		case 'COMPLETED':
			return Object.assign({}, state, {
				widgets: action.widgets
			});
	}

}

ReactDOM.render(
	<WidgetList store={createStore(reducer)} />,
	document.querySelector('main'));
