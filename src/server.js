import path from 'path';
import mongoose from 'mongoose';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';
import rest from './routers/rest';

//import { schema } from './graphql/schema';
import { schema as schemaRelay } from './graphql-relay/schema';

export default function(config) {

	mongoose
		.connect(`mongodb://${config.mongoServer.host}:${config.mongoServer.port}/${config.mongoServer.dbName}`);

	let restRouters = [rest('widget'),rest('person')];

	return Promise.all(restRouters).then(([widgetRouter,personRouter]) => {

		const app = express();
		const server = http.createServer(app);
		const graphqlHttpConfig = schema => ({ schema, pretty: true, graphiql: true, context: { db: 'cool' } });

		app.use('/graphql', graphqlHttp(graphqlHttpConfig(schemaRelay)));
		//app.use('/graphql-relay', graphqlHttp(graphqlHttpConfig(schemaRelay)));
		//app.use('/graphql', graphqlHttp(graphqlHttpConfig(schema)));
		app.use('/api', bodyParser.json());
		app.use('/api', widgetRouter);
		app.use('/api', personRouter);

		app.use(express.static(config.webServer.folder));

		server.listen(config.webServer.port, () =>
			console.log(`web server running on port ${config.webServer.port}
please do not close this terminal window
please use a new terminal window to run additional commands`));

	}).catch(err => {
		console.log(err.message || err);
	});
}
