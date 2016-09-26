import {
	GraphQLSchema, GraphQLObjectType, GraphQLList,
	GraphQLID, GraphQLString, GraphQLInt, GraphQLInputObjectType
} from 'graphql';

const authors = [
	{ id: 1, name: 'Maria' },
	{ id: 2, name: 'Harris' }
];

let lastAuthorId = 2;

const books = [
	{ id: 1, title: 'Winds of Winter', year: 2016, authorId: 1 },
	{ id: 2, title: 'Javascript the Good Parts', year: 2007, authorId: 2 },
	{ id: 3, title: 'Gone with the Wind', year: 1936, authorId: 1 }
];

const authorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		books: {
			type: new GraphQLList(bookType),
			args: {
				id: {
					type: GraphQLInt
				}
			},
			resolve: ({ id: authorId }, { id: bookId }) =>
				books.filter(b => b.authorId === authorId && b.id === bookId)
		}
	})
});

const bookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		title: {
			type: GraphQLString
		},
		year: {
			type: GraphQLInt
		},
		author: {
			type: authorType,
			resolve: ({ authorId }) => authors.find(a => a.id === authorId)
		}
	})
});

const query = new GraphQLObjectType({

	name: 'Query',

	fields: () => ({

		books: { 
			type: new GraphQLList(bookType),
			description: 'Get a list of books',
			args: {
				id: {
					type: GraphQLInt,
					description: 'Book id'
				}
			},
			resolve: (_, { id: bookId }) =>
				bookId ? [books.find(b => b.id === bookId)] : books
		}

	})

});

const inputAuthorType = new GraphQLInputObjectType({

	name: 'InputAuthor',
	fields: () => ({
		name: {
			type: GraphQLString
		}
	})

});

console.log(inputAuthorType);

const mutation = new GraphQLObjectType({

	name: 'Mutation',

	fields: () => ({

		insertAuthor: {
			type: authorType,
			args: {
				author: {
					type: inputAuthorType
				}
			},
			resolve: (_, { author }) => {
				authors.push(Object.assign(author, { id: ++lastAuthorId }));
				return authors[authors.length - 1];
			}
		}

	})
	
});


export const schema = new GraphQLSchema({ query, mutation });