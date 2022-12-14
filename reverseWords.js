/*
Complete the function that accepts a string parameter, and reverses each word in the string.
 All spaces in the string should be retained.     
 "This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"                                 


Take aways:
- split words into seperate arrays of letters
- reverse each word
- join 
*/

function reverseWord(str) {
	return str
		.split(" ")
		.map(function (word) {
			return word.split("").reverse().join(""); // no space in between quotes or use single
		})
		.join(" ");
}
