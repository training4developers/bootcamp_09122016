import {
	GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt,
	GraphQLList, GraphQLID, GraphQLFloat, GraphQLInputObjectType
} from 'graphql';

const authors = [
	{ id: 1, name: 'Bob Smith' }
];

let lastAuthorId = 1;

const books = [
	{ id: 1, authorId: 1, title: 'Book 1', isbn: '111111111', copyrightYear: 2015, usd: 4.00, cad: 5.00 },
	{ id: 2, authorId: 1, title: 'Book 2', isbn: '222222222', copyrightYear: 2016, usd: 4.00, cad: 5.00 }
];

const inputAuthorType = new GraphQLInputObjectType({
	name: 'InputAuthor',
	fields: () => ({
		name: {
			type: GraphQLString
		}
	})
});

const authorType = new GraphQLObjectType({

	name: 'Author',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		}
	})

});

const bookType = new GraphQLObjectType({

	name: 'Book',
	fields: {
		id: {
			type: GraphQLID
		},
		title: {
			type: GraphQLString,
			description: 'Title of the book'
		},
		isbn: {
			type: GraphQLString
		},
		copyrightYear: {
			type: GraphQLInt
		},
		price: {
			type: GraphQLFloat,
			args: {
				currency: {
					type: GraphQLString
				}
			},
			resolve: (book, { currency }) => {
				return currency === 'CAD' ? book.cad : book.usd;
			}
		},
		author: {
			type: authorType,
			resolve: (book) => {
				return authors.find(a => a.id === book.authorId);
			}
		}
	}

});


const query = new GraphQLObjectType({

	name: 'Query',
	fields: () => ({

		books: {
			type: new GraphQLList(bookType),
			description: 'A list of books',
			args: {
				id: {
					type: GraphQLInt
				}
			},
			resolve: (_, { id }, { db }) => {
				console.log(db);
				return id ? [books.find(b => b.id === id)] : books;
			}
		},

		authors: {
			type: new GraphQLList(authorType),
			resolve: () => authors
		}

	})

});

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