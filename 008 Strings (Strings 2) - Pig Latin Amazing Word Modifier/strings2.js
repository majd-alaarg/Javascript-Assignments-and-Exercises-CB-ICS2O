//defining variables
var wordOutput, userString

function myFunction() {

	//Retrieve user input and make lower case to avoid looking for 2x the amount of cases
	userString = document.getElementById("wordInput").value.toLowerCase();

	//Check to see if string starts with vowel
	if (userString.startsWith("a") || userString.startsWith("o") || userString.startsWith("u") || userString.startsWith("e") || userString.startsWith("i")) {

		//New word is the original input starting from the second letter + the first letter
		wordOutput = userString.substring(1) + userString.charAt(0);
	} else {
		//New word, if string does not begin with vowel, has an addition of "ly"
		wordOutput = userString + "ly"
	}
	
	//Output result
	document.getElementById("wordOutput").innerHTML = wordOutput;
}
