/*
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when 
determining if a character is a duplicate.

Take aways: 
- creating a new string 
- needs for loop to count through each character
- ignores all caps
*/

function duplicateEncoder(word) {
	let str = {}; // empty so anything can pass through
	let letter = word.toLowerCase().split("");
	for (i = 0; i < letter.length; i++) {
		let x = letter[i];
		if (str[x] === undefined) {
			// undefined since empty string
			str[x] = 1;
		} else {
			str[x] += 1;
		}
	}
	return letter
		.map(function (letter) {
			//.map edits arguments and returns array
			return str[letter] === 1 ? "(" : ")"; //
		})
		.join(""); /* when each letter passes through, if letter equals 1
		returns (, if not then returns ) */
}
