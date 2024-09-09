const findTheOldest = function(persons) {
	const d = new Date();
	persons = persons.map((person) => {
		if (!person.yearOfDeath){
			person.yearOfDeath = d.getFullYear();
		}
		person["age"] = person.yearOfDeath - person.yearOfBirth;
		return person;
	});
	persons = persons.sort((a, b) => b.age - a.age);
	return persons[0];
}

// Do not edit below this line
module.exports = findTheOldest;
