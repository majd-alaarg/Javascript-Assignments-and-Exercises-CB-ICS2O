//defining variables
var wordOutput, userString;

function myFunction() {

	//Retrieve user input
	userString = document.getElementById("wordInput").value.toLowerCase();
	letterInput = document.getElementById("letterInput").value.toLowerCase();

	//Random letter generator
	possibleLetters = "abcdefghijklmnopqrstuvwxyz";
	//Generate random letter by returning a character located at a random index. Didn't use the fromCharCode to ensure that output is a letter
	randomLetter = possibleLetters.charAt(Math.floor(26 * Math.random()));


	//Input checks
	//If user inputs a word, not a letter
	if (letterInput.length > 1) {
		alert("Please enter a letter not a word");
		//Refresh page
		location = location;

		//Check to see if string includes the letter
	} else if (userString.includes(letterInput)) {
		includeOutput = "contains the letter ";
		newWord = userString.replace(letterInput, randomLetter);

	} else {
		//New word, if string does not contain the letter
		includeOutput = "does not contain the letter ";
		newWord = "Nothing changes."
	}

	//Output inclusion result
	document.getElementById("inclusionOutput").innerHTML = "The word \'" + userString + "\' " + includeOutput + letterInput + ".";
	document.getElementById("randomLetterOutput").innerHTML = randomLetter;
	document.getElementById("wordOutput").innerHTML = newWord;
}
