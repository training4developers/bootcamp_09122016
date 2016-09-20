import React from 'react';
import ReactDOM from 'react-dom';

class SimpleForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			header: ''
		};
	}

	onChange = e => {
		this.setState({
			header: e.target.value
		});
	}

	componentDidMount() {
		this._input.focus();
	}

	render() {

		const message = '<b>Time for your break!</b>';

		return <form>
			<span dangerouslySetInnerHTML={({ __html: message})}></span><br />
			<label htmlFor="header">Header: </label>
			<input type="text" id="header" ref={control => this._input = control}
				name="header" value={this.state.header} onChange={this.onChange} />
		</form>;

	}

}

ReactDOM.render(<SimpleForm />, document.querySelector('main'));