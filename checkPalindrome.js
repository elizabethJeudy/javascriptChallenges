// Given the string, check if it is a palindrome.

function checkPalindrome(str) {
	// first split string into individual characters
	// next reverse the characters
	// last bring everything together
	return str.split("").reverse().join("") === str;
}
