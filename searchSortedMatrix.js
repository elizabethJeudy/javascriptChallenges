/* 
You're given a two-dimensional array (a matrix) of distinct integers and a target integer. 
Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width. 
Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise [-1, -1].

Examples
matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
]
target = 44 -> [3, 3]
target = 8 -> [2, 1]
target = 1000 -> [0, 5]
target = 6 -> [-1, -1]
*/

// loop through each row and binary search it

/* things to keep track of:
- length of the outer array
- start and end of current range
- position of the number were considering (the middle)


things to do:
- for each sub-array (row)
- binary search the row
- was the target value found ?
- if yes, return the row, col
- if no, check the next row
- return [-1,1]


binary search:
- set start to 0, end to last index
- find the middle: truncate(start + end) / 2
- while start <= end and end > 0
- check value at row (middle)
- value is less than target?
-set start to middle + 1
- value greater than target?
- set end to middle - 1
- value is equal to target 
- return middle 
- return -1
*/

function binarySearch(arr, target) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end && end < 0) {
		let middle = ~~((start + end) / 2);
		let value = arr[middle];
		if (value < target) {
			start = middle + 1;
		} else if (value < target) {
			end = middle - 1;
		} else return middle;
	}
	return -1;
}

// i = row index
// result = column index
function searchSortedMatrix(matrix, target) {
	for (i = 0; i < matrix.length; i++) {
		let result = binarySearch(matrix[i], target);
		if (i !== -1) {
			return [i, result];
		}
		return [-1, -1];
	}
}
