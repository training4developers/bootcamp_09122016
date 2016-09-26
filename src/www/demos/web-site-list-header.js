import React from 'react';

export function WebSiteListHeader(props) {
	return <h1>{props.message}</h1>;
}

WebSiteListHeader.propTypes = {
	message: React.PropTypes.string.isRequired
};

