import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: '',
			items: this.props.items.concat()
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onClick() {
		this.setState({
			items: this.state.items.concat(this.state.newItem),
			newItem: ''
		});
	}

	render() {
		const message = 'Websites We Like To Visit!';
		return <div className="fun-list">
			<h1>{message}</h1>
			<ul>{this.state.items.map(item => <li>{item}</li>)}</ul>
			<label htmlFor="new-item">New Item</label>
			<input type="text" id="new-item" name="newItem" value={this.state.newItem} onChange={this.onChange} />
			<button onClick={this.onClick}>Add Item</button>
		</div>;
	}

}

fetch('/api/widgets').then(res => res.json())
	.then(results =>
		ReactDOM.render(<HelloWorld items={results.map(widget => widget.name)} />,
			document.querySelector('main')));






