import React from 'react';

export class WebSiteListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			item: this.props.item
		};
	}

	render() {
		return <li>{this.state.item}</li>;
	}
}

export class WebSiteList extends React.Component {

	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		items: this.props.items.concat()
	// 	};

	// 	console.log('constructor executed...');

	// }

	// componentWillReceiveProps(props) {

	// 	console.log('component will receive props executed...');

	// 	this.setState({
	// 		items: props.items.concat()
	// 	});
	// }

	render() {
		return <ul>
			{this.props.items.map(item =>
				<WebSiteListItem key={item} item={item} />)}
		</ul>;
	}

}