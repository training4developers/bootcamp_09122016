import React from 'react';
import ReactDOM from 'react-dom';

class SimpleForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			header: '',
			age: 0,
			hairColor: '#ffffff',
			satisfaction: 50,
			birthDate: '2000-08-31',
			favSearchEngine: 'google',
			employed: true,
			comments: '',
			favSize: 'medium',
			favSize2: 'large',
			favSize3: ['small', 'large']
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.multiple
				? Array.from(e.target.options)
					.filter(option => option.selected).map(option => option.value) 
				: e.target.type === 'checkbox'
					? e.target.checked
					: e.target.value
		});
	}

	render() {

		const message = '<b>Time for your break!</b>';

		return <form>
			<div>
				<label htmlFor="header">Header: </label>
				<input type="text" id="header"
					name="header" value={this.state.header} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="age">Age: </label>
				<input type="number" id="age"
					name="age" value={this.state.age} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="hair-color">Hair Color: </label>
				<input type="color" id="hair-color"
					name="hairColor" value={this.state.hairColor} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="satisfaction">Satisfaction: </label>
				<span>{this.state.satisfaction}</span>
				<br />
				<input type="range" id="satisfaction"
					name="satisfaction" value={this.state.satisfaction} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="birth-date">Birth Date: </label>
				<span>{this.state.birthDate}</span>
				<br />
				<input type="date" id="birth-date"
					name="birthDate" value={this.state.birthDate} onChange={this.onChange} />
			</div>
			<fieldset>
				<legend>
					Favorite Search Engine: {this.state.favSearchEngine}
				</legend>
				<div>
					<label htmlFor="fav-search-engine-google">Google</label>
					<input type="radio" name="favSearchEngine" id="fav-search-engine-google"
						value="google" checked={this.state.favSearchEngine === 'google'}
						onChange={this.onChange} />
				</div>
				<div>
					<label htmlFor="fav-search-engine-bing">Bing</label>
					<input type="radio" name="favSearchEngine" id="fav-search-engine-bing"
						value="bing" checked={this.state.favSearchEngine === 'bing'}
						onChange={this.onChange} />
				</div>
				<div>
					<label htmlFor="fav-search-engine-yahoo">Yahoo</label>
					<input type="radio" name="favSearchEngine" id="fav-search-engine-yahoo"
						value="yahoo" checked={this.state.favSearchEngine === 'yahoo'}
						onChange={this.onChange} />
				</div>
			</fieldset>
			<div>
				<label htmlFor="employed">Employed: </label>
				<input type="checkbox" id="employed"
					name="employed" checked={this.state.employed} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="comments">Comments: </label>
				<textarea id="comments" name="comments" value={this.state.comments} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="fav-size">Favorite Size: </label>
				<select id="fav-size" name="favSize" value={this.state.favSize} onChange={this.onChange}>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
				</select>
			</div>
			<div>
				<label htmlFor="fav-size2">Favorite Size 2: </label>
				<select id="fav-size2" name="favSize2" size="5" value={this.state.favSize2} onChange={this.onChange}>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
				</select>
			</div>
			<div>
				<label htmlFor="fav-size3">Favorite Size 3: </label>
				{JSON.stringify(this.state.favSize3)}
				<br />
				<select id="fav-size3" name="favSize3" multiple size="5"
					value={this.state.favSize3} onChange={this.onChange}>
					<option value="tiny">Tiny</option>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
					<option value="huge">Huge</option>
				</select>
			</div>
		</form>;

	}

}

ReactDOM.render(<SimpleForm />, document.querySelector('main'));