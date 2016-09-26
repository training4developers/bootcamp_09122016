import PersonModel from './mongoose/person';
import Viewer from './models/viewer';
import Person from './models/person';

export const getViewer = (id) => new Viewer({ id });

export const getPeople = () => {
	return new Promise((resolve, reject) => {
		PersonModel.find({}, (err, results) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(results.map((result) => {
				return new Person(result);
			}));
		});
	});
};

export const getPerson = (id) => {
	return new Promise((resolve, reject) => {
		PersonModel.findById(id, (err, result) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(result ? new Person(result) : null);
		});
	});

};

export const insertPerson = (widget) =>
	new Promise((resolve, reject) =>
		(new PersonModel(widget)).save((err, results) =>
			err ? reject(err) : resolve(results ? new Person(results) : null)));

export const updatePerson = (widget) =>
	new Promise((resolve, reject) =>
		PersonModel.findByIdAndUpdate(widget._id || widget.id, widget, err =>
				(err) ? reject(err) : resolve(widget ? new Person(widget) : null)));

export const deletePerson = (id) =>
	new Promise((resolve, reject) =>
		PersonModel.findByIdAndRemove(id, (err, results) =>
				err ? reject(err) : resolve(results ? new Person(results) : null)));
