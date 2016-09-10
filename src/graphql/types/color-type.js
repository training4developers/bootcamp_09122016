import { GraphQLEnumType } from 'graphql';

export const colorType = new GraphQLEnumType({
	name: 'Color',
	description: 'An enumeration of colors',
	values: {
		'red': { value: 'red', description: 'Red' },
		'yellow': { value: 'yellow', description: 'Yellow' },
		'green': { value: 'green', description: 'Green' },
		'blue': { value: 'blue', description: 'Blue' }
	}
});
