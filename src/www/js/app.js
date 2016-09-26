import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import Relay from 'react-relay';	
import ReactDOM from 'react-dom';

import { PersonToolContainer } from './containers/person-tool-container';
import { ViewerRoute } from './routes/viewer-route';

// ReactDOM.render(<Relay.RootContainer Component={PersonToolContainer} route={new ViewerRoute()} />,
// 	document.querySelector('main'));

ReactDOM.render(<Relay.Renderer
	Container={PersonToolContainer}
	queryConfig={ViewerRoute}
	environment={Relay.Store}
 />, document.querySelector('main'));