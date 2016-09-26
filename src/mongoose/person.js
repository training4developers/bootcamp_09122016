import mongoose from 'mongoose';

export default mongoose.model('person', mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number,
	email: String,
	phone: String,
	city: String,
	state: String,
	active: Boolean
}));
