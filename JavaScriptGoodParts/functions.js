var add = function (a, b) {
    result = a + b;
    return result;
};
document.write(add(10, 20));
document.write('\n');
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment();
document.writeln(myObject.value);
myObject.increment(9);
document.writeln(myObject.value);

myObject.double = function () {
    var that = this; // Workaround.
    var helper = function () {
        that.value = add(that.value, that.value);
    };
    helper(); // Invoke helper as a function.
};
// Invoke double as a method.
myObject.double();
document.writeln(myObject.value);

var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

document.writeln("sum function " + sum(10, 20, 30));
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}
document.writeln("add Function " + add(10, 20));
var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}