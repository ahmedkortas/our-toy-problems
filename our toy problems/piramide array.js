/**
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
*/

var pyramid = function (number) {
	let pyramidArray = Array.from(Array(number + 1), (_, index) =>
		Array.from(Array(index), (_, subIndex) => subIndex)
	);
	return pyramidArray;
};

var pyramidWith1 = function (number) {
	let pyramidArray = Array.from(Array(number + 1), (_, index) =>
		Array.from(Array(index), () => 1)
	);
	return pyramidArray;
};
