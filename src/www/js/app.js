import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class AppComponent extends React.Component {

	render() {
		return <h1>React/Relay/GraphQL Starter Project!!!</h1>;
	}

}

ReactDOM.render(<AppComponent />, document.querySelector('main'));
