const fact = n => (n === 0 || n === 1 ? 1 : n * fact(n - 1));
const max = (x, y) => (x > y ? x : y);
const max1 = (x, y, z) => max(max(x, y), z);
//console.log(max1(19999, 1244, 166));

const power = (b, e) => {
	let r = b;
	for (i = 1; i < e; i++) {
		r = r * b;
	}
	return r;
};
//console.log(power(2, 4));

const reverseString = s => {
	let n = '';
	for (i = s.length; i >= 0; i--) {
		n += s[i];
	}
	return n;
};
//console.log(reverseString('KRISHNARAO'));
const arrayMaxValue = arr => {
	let m = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > m) m = arr[i];
	}
	return m;
};
//console.log(arrayMaxValue([10, 20, 5, 88, 5]));
const removeDuplicates = arr => {
	let temp = [];
	for (i = 0; i < arr.length; i++) {
		if (temp.indexOf(arr[i]) == -1) {
			temp.push(arr[i]);
		}
	}
	return temp;
};
let myArray = [1, 1, 2, 2, 3, 4, 2, 1, 6, 6, 7, 8, 8, 9, 9, 9];
//console.log(removeDuplicates(myArray));

const perfectNumber = n => {
	let s = 0;
	for (i = 1; i <= n / 2; i++) {
		if (n % i === 0) {
			s += i;
		}
	}
	if (s === n) console.log(s + ' is a perfect number');
	else console.log(s + ' is not a perfect number');
};
//console.log(perfectNumber(28));

const isPrime = n => {
	for (i = 2; i < n; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return n > 1;
};



