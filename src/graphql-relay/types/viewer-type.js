import { GraphQLObjectType } from 'graphql';
import { globalIdField, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';
import { nodeInterface } from '../../relay/node-definitions';
import { registerType } from '../../relay/resolve-type';
import { getViewer, getPeople } from '../../peopledb';
import Viewer from '../../models/viewer';
import { personConnection } from '../connections/person-connection';

export const viewerType = new GraphQLObjectType({

	name: 'Viewer',
	fields: () => ({

		id: globalIdField('Viewer'),
		
		people: {
			type: personConnection,
			description: 'A list of people',
			args: connectionArgs,
			resolve: (_, args) => connectionFromPromisedArray(getPeople(), args)
		}


	}),
	interfaces: () => [nodeInterface]

});

registerType(Viewer, viewerType, getViewer);