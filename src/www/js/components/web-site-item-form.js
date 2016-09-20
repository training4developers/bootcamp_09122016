import React from 'react';

export class WebSiteItemForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			newItem: ''
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
		this.props.addNewItem(this.state.newItem);

		this.setState({
			newItem: ''
		});
	}	

	render() {
		return <form>
			<label htmlFor="new-item">New Item</label>
			<input type="text" id="new-item" name="newItem"
				value={this.state.newItem} onChange={this.onChange} />
			<button onClick={this.onClick}>Add Item</button>
		</form>;
	}

}