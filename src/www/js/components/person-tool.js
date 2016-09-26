import React, { Component, PropTypes } from 'react';

export class PersonTool extends Component {

	static propTypes = {
		viewer: PropTypes.shape({
			people: PropTypes.shape({
				edges: PropTypes.array
			})
		})
	}

	render() {

		const edges = this.props.viewer.people.edges;

		return <div>
			<h1>Person Tool</h1>
			<ul>
				{edges.map(edge => <li key={edge.node.id}>{edge.node.firstName} {edge.node.lastName}</li>)}
			</ul>
		</div>;
	}
}