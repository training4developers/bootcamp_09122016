import { GraphQLString, GraphQLID, GraphQLInputObjectType } from 'graphql';

export const userInputType = new GraphQLInputObjectType({
	name: 'UserInput',
	description: 'A user',
	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'A user id'
		},
		name: {
			type: GraphQLString,
			description: 'A user name'
		}
	})
});
