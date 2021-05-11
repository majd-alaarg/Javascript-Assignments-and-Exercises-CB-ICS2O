//User input not visible until myFunction() begins
document.getElementById("userInput").style.display = "none";

//myFunction begins here starts on click of "calculate" button
function myFunction() {

	//Output area to div identified as "areaOutput"
	var question = randomMathQuestion();

	//Evaluate question, make it universal
	window.correctAnswer = eval(question);

	//Reveal question
	document.getElementById("questionOutput").innerHTML = "Your random math question is: " + question;

	//display user input box
	document.getElementById("userInput").style.display = "inline";
}


//Evaluate user input
function evaluateUser() {
	//Retrieve user input
	var userAnswer = document.getElementById("userAnswer").value;
	//Evaluate answer
	if (userAnswer == correctAnswer) {
		alert("Correct, generate again");
	} else {
		alert("Wrong, generate again");
	}
	
}


//Math question generator
function randomMathQuestion() {
	//Array of random operators
	var possibleOperations = ["+", "-", "%", "/", "*"];
	//Operator is accessed based on randomly generated index (Index range from 0-6)
	var operation = possibleOperations[Math.floor(5 * Math.random())];

	//Generating random numbers
	var randomNumber1, randomNumber2;
	randomNumber1 = Math.floor(60 * Math.random() + 1);
	randomNumber2 = Math.floor(25 * Math.random() + 1);
	//console.log(randomNumber1 + operation + randomNumber2);

	//Returning/generating math question
	return randomNumber1 + operation + randomNumber2;

}