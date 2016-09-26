import { personType } from '../types/person-type';
import { connectionDefinitions } from 'graphql-relay';

export const { connectionType: personConnection, edgeType: PersonEdge } = 
	connectionDefinitions({ name: 'Person', nodeType: personType });