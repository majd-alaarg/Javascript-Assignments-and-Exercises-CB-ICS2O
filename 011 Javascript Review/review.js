function a1() {
	word = prompt("Enter a word");
	alert(word.charAt(1))
}

function b1() {
	word = prompt("Enter a word").toLowerCase();
	if (word.includes("m")) {
		alert("The word you entered includes the letter \"M\"");
	} else {
		alert("The word you entered does not include the letter \"M\"");
	}
}

function c1() {
	sentence = prompt("Enter a sentence...");
	alert("Your sentence is " + sentence.length + " characters long.")
}

function d1() {
	sentence = prompt("Enter a sentence").toLowerCase();
	count = 0
	for (i = 0; i <= sentence.length; i++) {
		if (sentence.charAt(i) == "m") {
			count++;
		}
	}
	alert("Your sentence has " + count + " \"M's\" in it");
}

function e1() {
	word = prompt("Enter a word");
	word = word.substring(1, word.length - 1);
	alert(word);
}

function f1() {
	word = prompt("Enter a word");
	alert("#" + word.substring(1, word.length - 1) + "#");
}

function a2() {
	var i = 5;
	var sequence = "";
	for (i = 5; i <= 15; i = i + 2) {
		sequence += i + ", ";
	}

	alert(sequence.substring(0, sequence.length - 2));
}

function b2() {
	var sequence = "";
	for (i = 100; i >= 0; i = i - 5) {
		sequence += i + ", ";
	}
	alert(sequence.substring(0, sequence.length - 2))
}

function c2() {
	var sequence = "";
	for (i = 3; i <= 729; i = i * 3) {
		sequence += i + ", ";
	}

	alert(sequence.substring(0, sequence.length - 2))
}

function a3() {
	userInput = prompt("Enter 0 ")
	while (!(userInput == "0")) {
		userInput = prompt("You're not listening, please Enter 0")
	}
	alert("Thank you")
}

function generateLetter() {
	var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	letter = capitals.charAt(Math.floor(Math.random() * 26));
	//alert(letter);
	return letter;
}

function generatePassword() {
	var password = "";
	for (i = 0; i <= 5; i++) {
		password += generateLetter();
	}
	//alert("Password: " + password);
	return password;
}

function checkPassword() {
	var password = generatePassword();
	alert(password);
	var correct = false;
	userInput = prompt("Guess the password. Enter 0 to stop.")
	while (false) {
		userInput = prompt("Guess the password. Enter 0 to stop.");
		if (userInput == password || userInput == "0") {
			correct = true;
		}
	}
	if (userInput == password) {
		alert("You got it right");
	} else {
		alert("Why did you quit");
	}

}

function exercise9() {
	var word = prompt("Enter a word.");
	var letter = prompt("Enter a character.");
	var newWord = ""
	for (i = 0; i < word.length; i++) {
		newWord += letter;
	}
	
	alert("Your new word is: " + newWord);
}
