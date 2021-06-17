//Rectangle calculator
function myFunction1() {
	alert("Welcome to rectangle calculator");
	var length = Number(prompt("Enter a length"));
	var width = Number(prompt("Enter a width"));
	var area = length * width;
	var perimeter = 2 * (length + width);
	alert("The area is: " + area + "\nThe perimeter is: " + perimeter);
}


//Average calculator
function myFunction2() {
	alert("Average Claculator");

	gradeSum = 0;
	for (i = 0; i < 4; i++) {
		grade = Number(prompt("Enter a grade"));
		gradeSum += grade;
	}
	alert("The average is: " + gradeSum / 4)
}

//Money change calculator
function myFunction3() {
	var userInput = prompt("Enter a monetary amount, in cents, less than a dollar.");
	var quarterChange = Math.floor(userInput / 25);
	var dimeChange = Math.floor((userInput % 25) / 10);
	var nickelChange = Math.floor(((userInput % 25) % 10) / 5);
	var pennyChange = Math.floor((((userInput % 25) % 10) % 5) / 1);
	alert("You have " + quarterChange + " quarters, " + dimeChange + " dimes, " + nickelChange + " nickels, and " + pennyChange + " pennies.")
}

//Magic 8-Ball
function myFunction4() {
	var userInput = prompt("Enter a question");
	var possible = ["Maybe", "Probably not", "Not sure", "Most definitely", "Of course", "Presumably yes"];
	alert(possible[Math.floor(6 * Math.random())]);
}

//Leap Year Program
function myFunction5() {
	var yearInput = Number(prompt("Enter a valid year"));
	if (yearInput % 4 == 0 && yearInput % 100 != 0 || yearInput % 400 == 0) {
		alert("The year you have inputed is a leap year")
	} else {
		alert("It is not a leap year")
	}
}

//Higher or Lower Game 
function myFunction6() {
	var randomNum = Math.floor(10 * Math.random() + 1);
	for (i = 0; i < 3; i++) {
		userInput = prompt("Try to guess the number from 1 to 10. You have three tries.");
		if (userInput > randomNum) {
			alert("Too high. Guess lower.");
		} else if (userInput < randomNum) {
			alert("Too low. Guess higher.");
		} else {
			alert("Congratulations, you are right!");
			return;
		}
	}

	alert("You got it wrong three times.")

}

//Time to hours and minutes
function myFunction7() {
	var userInput = prompt("Enter a duration in minutes");
	var hours = Math.floor(userInput / 60);
	var minutes = userInput % 60;
	alert(hours + " hours and " + minutes + " minutes.");
}


//pplea function
function myFunction8(){
	var possibleVowels = "aeoui";
	var newWord = "";
	var userInput = prompt("Enter a word").toLowerCase();
	if (possibleVowels.includes(userInput.charAt(0))){
		newWord = userInput.substring(1) + userInput.charAt(0);
	} else{
		newWord = userInput + "ly"
	}
	
	alert(newWord);
}