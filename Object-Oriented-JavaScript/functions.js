//functions
function add(x, y) {
	return x + y;
}
console.log(add(10, 20));

var add1 = function(x, y) {
	return x + y;
};
console.log(add1(100, 200));
// It works just fine
// var result = add3(10, 20);
// function add3(x, y) {
// 	return x + y;
// }
//Not Working
// var result1 = add4(100, 200);
// var add4 = function(x, y) {
// 	return x + y;
// };

function sayHi() {
	console.log('Hi!');
}
sayHi();
var sayHi2 = sayHi;
sayHi2();

var sayHio = new Function('console.log("Hio!")');
sayHio();
var sayHio2 = sayHio;
sayHio2();
var numbers = [1, 5, 8, 4, 7, 10, 2, 6];
numbers.sort(function(f, s) {
	return f - s;
});
console.info(numbers);
var numbers1 = [1, 5, 8, 4, 7, 10, 2, 6];
numbers1.sort;
console.info(numbers1);

// parameters
function reflect(value) {
	return value;
}
console.info(reflect('Hi'));

console.info(reflect('Hi', 10));

console.info(reflect.length);

function reflect1() {
	return arguments[0];
}
console.info(reflect1('Hi'));

console.info(reflect1('Hi', 10));

console.info(reflect1.length);

function sum() {
	var result = 0;
	i = 0;
	length = arguments.length;
	while (i < length) {
		result += arguments[i];
		i++;
	}
	return result;
}
console.log(sum(10, 20, 30));

function sayMeaage(message) {
	console.log(message);
}

function sayMeaage() {
	console.log('Default message');
}

console.log(sayMeaage('Hello'));

var sayMeaage1 = new Function('meaage', 'console.log(message)');
sayMeaage1 = new Function("console.log('Default Meaage1')");

sayMeaage1('hello');

function sayMessage2(message) {
	if (arguments.length === 0) {
		message = 'Default Message2';
	}
	console.log(message);
}
sayMessage2('hello');

//Object Methods
var person = {
	name: 'Nicholas',
	sayName: function() {
		console.log(person.name);
	},
};

person.sayName();

function sayNameForAll() {
	console.log(this.name);
}

var person1 = {
	name: 'Nicholas',
	sayName: sayNameForAll,
};
var person2 = {
	name: 'Greg',
	sayName: sayNameForAll,
};
var name = 'Michael';

person1.sayName();
person2.sayName();
sayNameForAll();
//the call() method
function sayNameForAll1(label) {
	console.log(label + ': ' + this.name);
}

var person11 = {
	name: 'Nicholas',
	sayName: sayNameForAll,
};
var person22 = {
	name: 'Greg',
	sayName: sayNameForAll,
};
var name1 = 'Michael';

sayNameForAll1.call(this, 'Global');
sayNameForAll1.call(person11, 'person11');
sayNameForAll1.call(person22, 'person22');

//the apply() method
function sayNameForAll2(label) {
	console.log(label + ': ' + this.name);
}

var person111 = {
	name: 'Nicholas',
	sayName: sayNameForAll,
};
var person222 = {
	name: 'Greg',
	sayName: sayNameForAll,
};
var name11 = 'Michael';

sayNameForAll2.apply(this, ['Global']);
sayNameForAll2.apply(person111, ['person111']);
sayNameForAll2.apply(person222, ['person222']);
console.log('------bind()---------');
// the bind() method
var sayNameForPerson = sayNameForAll2.bind(person111);
sayNameForPerson('person111');

var sayNameForPerson1 = sayNameForAll2.bind(person222);
sayNameForPerson('person222');
//ataching a method to an objet doesn't change 'this'
person222.sayName = sayNameForPerson;
person222.sayName('person222');
