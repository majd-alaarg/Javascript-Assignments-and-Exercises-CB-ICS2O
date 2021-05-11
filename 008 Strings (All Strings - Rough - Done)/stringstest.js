function strings2() {
	var userWord = prompt("Enter a word");
	var firstLetter = userWord.charAt(0);
	if (firstLetter == "a" || firstLetter == "e" || firstLetter == "o" || firstLetter == "u" || firstLetter == "i") {
		var userOutput = userWord.substring(1) + firstLetter;

	} else {
		var userOutput = userWord + "ly"
	}
	alert(userOutput);
}

function strings3() {
	var userSentence = prompt("enter a sentence");
	var userSubstring = prompt("enter a substring");
	alert("Your sentence is " + userSentence.length + " characters long.");
	if (userSentence.includes(userSubstring)) {
		var firstOccurance = userSentence.indexOf(userSubstring);
		var lastOccurance = userSentence.lastIndexOf(userSubstring);
		alert("First occurance of your substring is at index " + firstOccurance);
		alert("Last occurance of your substring is at index " + lastOccurance);
	} else {
		alert("The substring is not included in the inputted sentence.");
	}
}

function strings4() {
	var userWord = prompt("Enter a word");
	var userLetter = prompt("Enter a letter");
	if (userWord.includes(userLetter)) {
		alert(userWord + " contains a " + userLetter);
		var randomLetter = String.fromCharCode(256 * Math.random());
		var newWord = userWord.replace(userLetter, randomLetter);
		alert(newWord);
	} else {
		alert(userWord + " does not contain an " + userLetter);
	}
}

function strings5(){
	var userSentence = prompt("Enter a string of words seperated by commes and a space.");
	var newArray = userSentence.split(", ");
	var orderOutput = newArray.sort();
	alert(orderOutput);
}