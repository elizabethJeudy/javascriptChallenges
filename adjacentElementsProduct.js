// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21. 7 and 3 produce the largest product.

// loop through array
// group 2 inputs of array & finds product
// compare results of groups to see largest product
// render 2 numbers with largest

function solution(inputArray) {
	let highestNum = inputArray[0] * inputArray[1];
	for (let i = 1; i < inputArray.length; i++) {
		// grabs second number in array & multiply next number below
		// compares product to next group of multiples
		highestNum = Math.max(highestNum, inputArray[i] * inputArray[i - 1]);
	}
	return highestNum;
}

// Math.max returns highest number given into parameters
