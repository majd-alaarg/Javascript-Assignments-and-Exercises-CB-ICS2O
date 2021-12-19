function convertFunction() {
	var userInput = document.getElementById("sentenceInput").value;

	//Modifications are made to the original string
	userInput = userInput.replaceAll("a", "4");
	userInput = userInput.replaceAll("A", "4");
	userInput = userInput.replaceAll("e", "3");
	userInput = userInput.replaceAll("i", "1");
	userInput = userInput.replaceAll("I", "1");
	userInput = userInput.replaceAll("o", "0");
	userInput = userInput.replaceAll("O", "0");
	userInput = userInput.replaceAll("E", "3");

	/*
	var usedInput = userInput.toLowerCase();
	var i = 0
	while (i < userInput.length) {
		if (usedInput.charAt(i) == "a") {
			usedInput.replace("a", "4");
		} else if (usedInput.charAt(i) == "o") {
			usedInput.replace("o", "0");
		} else if (usedInput.charAt(i) == "e") {
			usedInput.replace("e", "3");
		} else if (usedInput.charAt(i) == "i") {
			usedInput.replace("i", "1");
		}
		i++;
	}
*/
	document.getElementById("encryptOutput").innerHTML = userInput;

}
