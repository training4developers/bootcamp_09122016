'use strict';

// starts the web server using the configuation loaded from package.json
const { webServer, mongoServer } = require('./package.json');

require('./dist/server.js').default({
	webServer, mongoServer
});