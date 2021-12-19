//generate password
function passwordGenerate() {

	//Possible letters
	var possibleLetters = "abcdefghijklmnopqrstuvwxyz1234567890";

	//Number of letters chose (Max. 7; Min. 3)
	numOfLetters = Math.floor(8 * Math.random() + 3);

	//Generate Passowrd
	var password = "";

	//Length of password determines loop
	var randomNum;
	for (i = 1; i <= numOfLetters; i++) {
		//Random number to select choice
		randomNum = Math.floor(36 * Math.random());
		//Add on to the password
		password += possibleLetters.charAt(randomNum);
	}
	
	//Return
	return password;
}

function guessFunction() {

	//Calling password
	password = passwordGenerate();

	//Setting answer to false for loop
	var correctAnswer = false;

	//Prompt game start
	alert("The length of your secret password is " + numOfLetters + ". Try to guess it");

	//While user is incorrect, keep asking for guess
	var userAnswer;
	while (!correctAnswer) {
		userAnswer = prompt("Guess the password. Type \"quit\" to stop");

		if (userAnswer == password) {
			correctAnswer = true;
			alert("Congrats, you got it right!!!!");
		} else if (userAnswer == "quit") {
			correctAnswer = true;
			alert("Why did you quit!!! Play again!")
		} else if (userAnswer != password) {
			alert("Wrong! Guess Again!");
		}
	}
}
