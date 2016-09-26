import Relay from 'react-relay';
import { PersonTool } from '../components/person-tool';

export const PersonToolContainer = Relay.createContainer(PersonTool, {

	fragments: {
		viewer: () => Relay.QL`
			fragment on Viewer {
				id
				people(first: 1000) {
					edges {
						node {
							id
							firstName
							lastName
							age
							email
							phone
							city
							state
							active
						}
					}
				}
			}
		`
	}

});