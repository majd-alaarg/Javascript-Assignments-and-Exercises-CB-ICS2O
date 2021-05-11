//defining variables
var wordOutput, stringInput, sortedInput, userOutput, newArray;

function myFunction() {

	//Retrieve user input and make lower case to avoid looking for 2x the amount of cases
	stringInput = document.getElementById("stringInput").value;

	//Take user input and convert it into an array with the ", " as the split parameter/seperator
	newArray = stringInput.split(", ");
	
	//Sort the new array
	sortedInput = newArray.sort();
	
	//Join the string with commas spaces
	userOutput = sortedInput.join(', ');
	
	//Output to user
	document.getElementById("orderOutput").innerHTML = userOutput;
}
