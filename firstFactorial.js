/* Have the function FirstFactorial(num) take the num parameter being passed and return 
the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
 For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/

function factorial(num) {
	if (num === 0 || num === 1) {
		return 1; // base case - stopping condition that will be checked first
	} else {
		return num * factorial(num - 1); // recursive base - when base case fails, will call recursion
	}
}
