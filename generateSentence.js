// The generateSentence(desc, arr) takes two parameters: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
	// grabs the number of items in array
	let baseString = `The ${arr.length} ${desc} are `;
	// comma will stop before last item in array
	const lastIndex = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		if (i === lastIndex) {
			return (baseString += arr[i]);
		} else {
			baseString += arr[i] + ",";
		}
	}
	return baseString;
}
const sentence = generateSentence(
	"cookies"[("chocolate chip", "sugar", "oatmeal raisin")]
);
console.log(sentence);