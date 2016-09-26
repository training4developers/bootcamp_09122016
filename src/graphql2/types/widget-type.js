import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql';

import { colorType } from './color-type';
import { sizeType } from './size-type';
import { userType } from './user-type';

import { getWidget } from '../../database';

export const widgetType = new GraphQLObjectType({
	name: 'Widget',
	description: 'A widget',
	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'The widget id'
		},
		owner: {
			type: userType,
			description: 'The owner of the widget',
			resolve: ({owner, id}) => owner || getWidget(id).then(widget => widget.owner)
		},
		name: {
			type: GraphQLString,
			description : 'The widget name'
		},
		description: {
			type: GraphQLString,
			description: 'The widget description'
		},
		color: {
			type: colorType,
			description: 'The widget color'
		},
		size: {
			type: sizeType,
			description: 'The widget size'
		},
		quantity: {
			type: GraphQLInt,
			description: 'The widget quantity'
		}
	})
});
