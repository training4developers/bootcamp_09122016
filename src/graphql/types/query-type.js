import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLID } from 'graphql';
import { getWidget, getWidgets, getUser, getUsers } from '../../database';

import { userType} from './user-type';
import { widgetType } from './widget-type';

export const queryType = new GraphQLObjectType({
	name: 'Query',
	fields: {
		widget: {
			type: widgetType,
			description: 'Get a widget by id',
			args: {
				id: {
					type: GraphQLID,
					description: 'Id of the widget to get'
				}
			},
			resolve: (ignore, args) => getWidget(args.id)
		},
		widgets: {
			description: 'Get all widgets',
			type: new GraphQLList(widgetType),
			resolve: () => getWidgets()
		},
		user: {
			type: userType,
			description: 'Get a user by id',
			args: {
				id: {
					type: GraphQLID,
					description: 'Id of the user to get'
				}
			},
			resolve: (ignore, args) => getUser(args.id)
		},
		users: {
			type: new GraphQLList(userType),
			description: 'Get all users',
			resolve: () => getUsers()
		}
	}

});
