import React from 'react';
import ReactDOM from 'react-dom';

class BaseFormComponent extends React.Component {

	constructor(props) {
		super(props);

		this.onChange= this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

}

class ListItem extends BaseFormComponent {

	constructor(props)  {
		super(props);

		this.state = {
			editItem: props.listItem
		};
	}

	render() {

		return <li>
			<input type="text" name="editItem" value={this.state.editItem} onChange={this.onChange} />
		</li>;

	}

}

class ListOfItems extends React.Component {

	static propTypes = {
		items: React.PropTypes.arrayOf(React.PropTypes.string)
	}

	constructor(props) {
		super(props);

		this.state = {
			items: props.items.concat()
		};

		setTimeout(() => {
			console.log('timeout expired');
			this.setState({
				items: this.state.items.slice(1)
			});

		}, 3000);
	}

	render() {
		return <ul>
			{this.state.items.map((item, index) => <ListItem key={index} listItem={item} />)}
		</ul>;
	}



}

const colors = ['red','green','saffron','blue'];

ReactDOM.render(<ListOfItems items={colors} />, document.querySelector('main'));