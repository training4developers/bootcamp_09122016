import { GraphQLSchema } from 'graphql';
import { queryType } from './types/query-type';
import { mutationType } from './types/mutation-type';

export const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });
