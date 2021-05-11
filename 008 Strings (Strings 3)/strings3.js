//defining variables
var userInput, userSubstring, inputLength, firstOccurance, lastOccurance;

function myFunction() {

	//Retrieve user input and make lower case
	userInput = document.getElementById("wordInput").value.toLowerCase();
	userSubstring = document.getElementById("substringInput").value.toLowerCase();

	//String length
	inputLength = userInput.length;

	//Search for substrings
	if (userInput.includes(userSubstring)) {
		firstOccurance = userInput.indexOf(userSubstring);
		lastOccurance = userInput.lastIndexOf(userSubstring);
	} else {
		//If substring not included, return N/A instead of -1
		firstOccurance = "N/A";
		lastOccurance = "N/A";
	}


	//Output result
	document.getElementById("characterLengthOutput").innerHTML = inputLength;
	document.getElementById("firstIndexOutput").innerHTML = firstOccurance;
	document.getElementById("lastIndexOutput").innerHTML = lastOccurance;
}
