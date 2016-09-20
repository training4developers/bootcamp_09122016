import React from 'react';
import ReactDOM from 'react-dom';

function DetailItem(props) {

}

DetailItem.propTypes = {
	item: React.PropTypes.shape({
		name: React.PropTypes.string,
		color: React.PropTypes.string,
		size: React.PropTypes.string
	})
};

function SummaryItem(props) {

}

SummaryItem.propTypes = {
	item: React.PropTypes.shape({
		name: React.PropTypes.string
	})
};

function ItemList(props) {

	return <ul>{props.items.map(item => props.showDetail
			? <DetailItem item={item} />
			: <SummaryItem item={item} />)}</ul>;

}

ItemList.propTypes = {
	showDetail: React.PropTypes.bool.isRequired,
	items: React.PropTypes.array
};

ItemList.defaultProps = {
	showDetail: false
};



class MyComponent extends React.Component {

	// static get propTypes() {
	// 	return {
	// 		header: React.PropTypes.string
	// 	};
	// }

	static propTypes = {
		header: React.PropTypes.string.isRequired
	}

	static defaultProps = {
		header: 'Intuit rocks!'
	}

	constructor(props) {
		super(props);

	}

	render() {
		return <h1>{this.props.header}</h1>;
	}

}

// MyComponent.propTypes = {
// 	header: React.PropTypes.string
// };

function MyComponent2(props) {
	return <h1>{props.header}</h1>;
}

MyComponent2.propTypes = {
	header: React.PropTypes.string.isRequired
};

MyComponent2.defaultProps = {
	header: 'Xero sucks!'
};

const header1 = '';
const header2 = '';

ReactDOM.render(<MyComponent header={header1} />, document.querySelector('#component1'));
ReactDOM.render(<MyComponent2 header={header2} />, document.querySelector('#component2'));

