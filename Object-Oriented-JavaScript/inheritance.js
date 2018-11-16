var book = {
  title: 'This principles of object-oriented javascript'
};
var prototype = Object.getPrototypeOf(book);
console.log(prototype === Object.prototype);

var now = new Date();
var earlier = new Date(2010, 01, 01);
console.log(now > earlier);
var message = 'Book = ' + book;
console.log(message);
var book1 = {
  title: 'This principles of object-oriented javascript',
  toString: function() {
    return '[ Book ' + this.title + ']';
  }
};
var message1 = 'Book = ' + book1;
console.log(message1);

Object.prototype.add = function(value) {
  return this + value;
};

console.log(book.add(5));
console.log('title'.add('end'));

console.log(document.add(true));
console.log(window.add(5));

var empty = {};

for (var property in empty) {
  console.log(property);
}

for (var property in empty) {
  if (empty.hasOwnProperty(property)) {
    console.log(property);
  }
}
var book = Object.create(Object.prototype, {
  title: {
    configurable: true,
    enumerable: true,
    value: 'This principles of object-oriented javascript',
    writable: true
  }
});

var person1 = {
  name: 'Nicholas',
  sayName: function() {
    console.log(this.name);
  }
};

var person2 = Object.create(person1, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Greg',
    writable: true
  }
});

console.log(person1.sayName());
console.log(person2.sayName());

console.log(person1.hasOwnProperty('name'));
console.log(person1.isPrototypeOf(person2));
console.log(person2.hasOwnProperty('sayName'));

var nakedObject = Object.create(null);
console.log('toString' in nakedObject);
console.log('valueOf' in nakedObject);

//Constructor Inheritance
function YourConstructor() {}

YourConstructor.prototype = Object.create(Object.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: YourConstructor,
    writable: true
  }
});

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return '[ Rectange ' + this.length + '*' + this.width + ']';
};

function Square(size) {
  this.length = size;
  this.width = size;
}
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return '[ Rectange ' + this.length + '*' + this.width + ']';
};
var rect = new Rectangle(10, 5);
var square = new Square(5);
console.log(rect.getArea());
console.log(square.getArea());

console.log(rect.toString());
console.log(square.toString());

console.log(rect instanceof Rectangle);
console.log(square instanceof Object);

console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true
  }
});

Square.prototype.toString = function() {
  return '[ Square ' + this.length + '*' + this.width + ']';
};

//Constructor Stealing
