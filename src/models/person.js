export default class {
	constructor(person) {

		if (!person) return;

		Object.assign(this, {
			id: (person._id && person._id.toString()) || person.id,
			firstName: person.firstName,
			lastName: person.lastName,
			age: person.age,
			email: person.email,
			phone: person.phone,
			city: person.city,
			state: person.state,
			active: person.active
		});

	}
}
