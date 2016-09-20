import React from 'react';
import ReactDOM from 'react-dom';

import { WebSiteListHeader as TheHeader } from './components/web-site-list-header';
import { WebSiteList } from './components/web-site-list';
import { WebSiteItemForm } from './components/web-site-item-form';

class HelloWorld extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: this.props.items.concat()
		};
		
		this.onClick = this.onClick.bind(this);

		setTimeout(() => {

			console.log('set timeout executed');

			this.setState({
				items: this.props.items.slice(0, 1)
					.concat(this.props.items.slice(2))
			});

		}, 2000);
	}

	onClick(newItem) {
		this.setState({
			items: this.state.items.concat(newItem)
		});
	}

	render() {
		const message = 'Websites We Like To Visit!!!';
		return <div className="fun-list">
			<TheHeader message={message} />
			<WebSiteList items={this.state.items} />
			<WebSiteItemForm addNewItem={this.onClick} />

		</div>;
	}

}

fetch('/api/widgets').then(res => res.json())
	.then(results =>
		ReactDOM.render(<HelloWorld items={results.map(widget => widget.name)} />,
			document.querySelector('main')));






