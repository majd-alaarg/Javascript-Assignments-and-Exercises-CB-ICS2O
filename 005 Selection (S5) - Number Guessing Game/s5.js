//Please go full screen for maximum experience

//For all of the disappear and appear functions, you could also use document.getElementById("myDIV").style.display = .... but you cannot animate it in that case.

//The gameStart() function is triggerred when users click the start button.
function gameStart() {
	// Retrieves the input box by it's ID and adds another CSS class to it which toggles it's visibility as given by the CSS code.
	var appear = document.getElementById("appear");
	appear.classList.add("appear-function");

	//The appear-function class gives the opacity of the input box a value of 1, the form-box class, which gave a starting opacity of 0, is removed simultaneously.
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

	//Retrieve user input
	var userInput = Number(document.getElementById("userInput").value);

	//The following code keeps track of the number of guesses by the user through each click of the guess button. myFunction() is triggered upon every click of the guess button meaning that every click will execute the code from the top again, going through increasing by increments of 1. 
	guesses++;

	//When the user gets the answer right or uses 3 guesses, answerAchieved == true. 
	if (answerAchieved == true) {
		//If the user has already gotten the right answer, prompt them to refresh their page.
		if (userInput == randomNumber) {
			document.getElementById("outputMessage").innerHTML = 'You already guessed the <span id="right">right</span> answer! Refresh the page.';
		}
		//If the user has already tried three times, prompt them to refresh their page.
		else {
			document.getElementById("outputMessage").innerHTML = 'You already guessed <span id="wrong"> wrong three times</span>! Refresh the page.'
		}
		//Stop
		return;
	}

	//User input evaluation
	//If user input is too high
	else if (userInput > randomNumber) {
		if (guesses > 1) {
			document.getElementById("outputMessage").innerHTML = '<span id="wrong">Wrong</span> answer <b>again</b>. Guess lower.';
		} else document.getElementById("outputMessage").innerHTML = '<span id="wrong">Wrong</span> answer. Guess lower.';

	}
	//If user input is too low
	else if (userInput < randomNumber) {
		if (guesses > 1) {
			document.getElementById("outputMessage").innerHTML = '<span id="wrong">Wrong</span> answer <b>again</b>. Guess higher.';
		} else document.getElementById("outputMessage").innerHTML = '<span id="wrong">Wrong</span> answer. Guess higher.';
	}

	//If user gets the right answer
	else if (userInput == randomNumber) {

		//Sets answerAchieved to true
		answerAchieved = true;

		//The following code decides prizes based on # of attemps
		if (guesses == 1) {
			document.getElementById("outputMessage").innerHTML = 'You guessed the <span id="right">right</span> answer in ' + guesses + " try!";
			var userPrize = "Superyacht";
			var userPrizeImage = "prize1.png";

		} else if (guesses == 2) {
			document.getElementById("outputMessage").innerHTML = 'You guessed the <span id="right">right</span> answer in ' + guesses + " tries!";
			var userPrize = "brand new Nissan";
			var userPrizeImage = "prize2.png";

		} else if (guesses == 3) {
			document.getElementById("outputMessage").innerHTML = 'You guessed the <span id="right">right</span> answer in ' + guesses + " tries!";
			var userPrize = "Mars bar";
			var userPrizeImage = "prize3.png";
		}

	}


	//If user is wrong three times
	if (guesses == 3 && userInput != randomNumber) {
		document.getElementById("outputMessage").innerHTML = "<span id='wrong'>Wrong again. You're a failure</span>";

		//Prize after three failed attempts 
		var userPrize = "lump of coal";
		var userPrizeImage = "prize4.png";

		//Gives user max 3 attemps
		answerAchieved = true;
	}


	//Prize reveal program initiated if user gets right answer or all guesses used up
	if (userInput == randomNumber || guesses == 3) {

		//Shake mystery box
		var shake = document.getElementById("image_box");
		shake.classList.add("shake");

		//Reveal prize, make visible
		var appear = document.getElementById("outputContainer");
		appear.classList.add("remove");

		//Prize output decision
		document.getElementById("message").innerHTML = "You win a " + userPrize;
		document.getElementById("prizeImage").src = userPrizeImage;
	}
}

//Game code ends
