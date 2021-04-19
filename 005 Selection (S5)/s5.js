//The gameStart() function is triggerred when users click the start button.
function gameStart() {
	// At first, the input box for the game in invisible using CSS opacity:0. This function retrieves the input box by it's ID and adds another CSS class to it which toggles it's visibility as given by the CSS code.
	var appear = document.getElementById("appear");
	appear.classList.add("appear-function");

	//As I was testing the code, it was discovered that the previous form-box class, the one used for the opacity:0 code, would return after the input appeared. As a solution, as the appear-function class gives the opacity of the input box a value of 1, the form-box class, which gave a starting opacity of 0, is removed simultaneously.
	appear.classList.remove("form-box");

	//The starting button disappears as the input box appears. The div's ID is retrieved and then the div is entirely removed using the removeChild function.
	var disappear = document.getElementById("disappear");
	disappear.parentNode.removeChild(disappear);


}
//Game start function ends



//Game code begins

//Random number generator
var randomNumber = Number(Math.floor(10 * Math.random() + 1));
console.log(randomNumber);


//Setting the initial # of guesses to 0.
var guesses = 0;


//Variable "answerAchieved" will regulate whether or not player has already answered correctly. 
var answerAchieved = false;


//myFunction begins. This function handles all inputs and outputs
function myFunction() {

	//Retrieved user input
	var userInput = Number(document.getElementById("userInput").value);

	//The following code keeps track of the number of guesses by the user through each click of the guess button. myFunction() is triggered upon every click of the guess button meaning that every click will execute the code from the top again, going through increasing by increments of 1. 
	guesses++;

	//When the user gets the answer right, answerAchieved == true. This code is found at the beginning to authenticate if the user has already gotten the right answer, prompting them to refresh their page.
	if (answerAchieved == true) {
		document.getElementById("outputMessage").innerHTML = 'You already guessed the <span id="right">right</span> answer! Refresh the page.';
	}

	//User input evaluation
	//If user input is too high
	else if (userInput > randomNumber) {
		document.getElementById("outputMessage").innerHTML = '<span id="wrong">Wrong</span> answer. Guess lower.';
	}
	//If user input is too low
	else if (userInput < randomNumber) {
		document.getElementById("outputMessage").innerHTML = '<span id="wrong">Wrong</span> answer. Guess higher.';
	}


	//If user gets the right answer
	//Being at the end of the function, this code is only executed if the user's input is correct, after which outputs a message depending on the number of tries it took to reach a correct answer.
	else if (userInput == randomNumber) {
		//The following code is simply to differentiate between "try" and "tries."
		if (guesses == 1) {
			document.getElementById("outputMessage").innerHTML = 'You guessed the <span id="right">right</span> answer in ' + guesses + " try!";
			//Sets answerAchieved to true, prompting user to refresh if they click again
			answerAchieved = true;
		} else {
			document.getElementById("outputMessage").innerHTML = 'You guessed the <span id="right">right</span> answer in ' + guesses + " tries!";

			answerAchieved = true;
		}

	}

	//Gives user max 3 attemps
	if (guesses == 3 && userInput != randomNumber) {
		var removeButton = document.getElementById("button");
		removeButton.parentNode.removeChild(button);
		document.getElementById("outputMessage").innerHTML = "<span id='wrong'>Wrong again. You're a failure</span>";
	}

	//Prize reveal program
	if (userInput == randomNumber || guesses == 3) {
		var shake = document.getElementById("image_box");
		shake.classList.add("shake");
		
		//Reveal prize box
		var appear = document.getElementById("outputContainer");
		appear.classList.add("remove");
		
		//Prize output decision
		document.getElementById("message").innerHTML = "You win a toyota corrola!";
		document.getElementById("prizeImage").src = "prize1.png";
	}
}

//Game code ends
