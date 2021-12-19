function countFunction() {
	//Retrieve Input
	var userInput = document.getElementById("sentenceInput").value.toLowerCase();

	//Minus 1 to account for index starting at 0
	var inputIndexLength = userInput.length - 1;

	//Setting acceptable letters that will be counted
	var possibleLetters = "abcdefghijklmnopqrstuvwxyz";
	
	//Setting i and letterCount to 0 outside of loop
	var i = 0;
	var letterCount = 0;

	//Loop runs for the length of the input. This would be better as a "for" loop
	while (i <= inputIndexLength) {
		//Check to see if the character in the input is included in the possible letters
		if (possibleLetters.includes(userInput.charAt(i))) {
			
			//Add 1 to the letter count
			letterCount++;
		}
		
		//Increment it since you can't include it in the while boolean
		i++;
	}

	//Output
	document.getElementById("countOutput").innerHTML = letterCount;
}
