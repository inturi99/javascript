var person1 = {
	name: 'Nicholas',
};
var person2 = new Object();
person2.name = 'Nicholas';
person1.age = 'Redacted';
person2.age = 'Redcted';

console.log('name' in person1);
console.log(person1.propertyIsEnumerable('name'));

console.log('length' in person1);
console.log(person1.propertyIsEnumerable('length'));

// types of properties
var person3 = {
	_name: 'Nicholas',
	get name() {
		console.log('Reading name');
		return this._name;
	},
	set name(value) {
		console.log('Setting name to %s', value);
		this._name = value;
	},
};
console.log(person3.name);
person3.name = 'Greg';
console.log(person3.name);

//property attributes
//Common Attributes
Object.defineProperty(person1, 'name', {
	enumerable: false,
});
console.log('name' in person1);
console.log(person1.propertyIsEnumerable('name'));
Object.defineProperty(person1, 'name', {
	configurable: false,
});
console.log('name' in person1);
console.log(person1.name);

var person4 = {};
Object.defineProperty(person4, 'name', {
	value: 'Nicholas',
	enumerable: true,
	configurable: true,
	writable: true,
});
var person5 = {};
Object.defineProperty(person5, 'name', {
	value: 'Nicholas',
});
console.log('name' in person5);
console.log(person5.propertyIsEnumerable('name'));
delete person5.name;
console.log('name' in person5);
person5.name = 'Greg';
console.log(person5.name);

var person6 = {
	_name: 'Nicholas',
	get name() {
		console.log('Reading name');
		return this._name;
	},
	set name(value) {
		console.log('Setting name to %s', value);
		this._name = value;
	},
};
//this code can also be written as follows

var person7 = {
	_name: 'Nicholas',
};
Object.defineProperty(person7, 'name', {
	get: function() {
		console.log('Reading name');
		return this._name;
	},
	set: function(value) {
		console.log('Setting name to %s', value);
		this._name = value;
	},
	enumerable: true,
	configurable: true,
});
