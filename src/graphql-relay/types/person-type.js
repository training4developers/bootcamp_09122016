import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../../relay/node-definitions';
import { registerType } from '../../relay/resolve-type';
import { getPerson } from '../../peopledb';
import Person from '../../models/person';

export const personType = new GraphQLObjectType({

	name: 'Person',
	description: 'A person',
	fields: () => ({
		id: globalIdField('Person'),
		firstName: {
			type: GraphQLString,
			description: 'The first name of the person.'
		},
		lastName: {
			type: GraphQLString,
			description: 'The last name of the person.'
		},
		age: {
			type: GraphQLInt,
			description: 'The age of the person.'
		},
		email: {
			type: GraphQLString,
			description: 'The email address of the person.'
		},
		phone: {
			type: GraphQLString,
			description: 'The phone number of the person.'
		},
		city: {
			type: GraphQLString,
			description: 'The city of the person.'
		},
		state: {
			type: GraphQLString,
			description: 'The state of the person.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Is the person active.'
		}
	}),
	interfaces: [nodeInterface]
});

registerType(Person, personType, getPerson);
