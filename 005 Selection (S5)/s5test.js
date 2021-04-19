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


//Random number generator
var randomNumber = Number(Math.floor(10 * Math.random() + 1));
console.log(randomNumber);

//Starting score of 0
var score = 0

//Variable "guessed" will regulate whether or not player has already answered correctly
var answerAchieved = false;


//myFunction begins. This function handles all inputs and outputs
function myFunction() {
	//Retrieve user's input
	var userInput = Number(document.getElementById("userInput").value);

	// Score++
	score = score + 1;

	//If user has already gotten the correct answer, the variable answerAchieved becomes true prompting the user to refresh their page for a new round
	if (answerAchieved == true) {
		document.getElementById("message").innerHTML = 'You already guessed the <span id="right">right</span> answer! Refresh the page.';
	}

	// If right answer
	else if (userInput == randomNumber) {

		// Gotten in one guess
		if (score == 1) {
			document.getElementById("message").innerHTML = 'You guessed the <span id="right">right</span> answer in 1 move. You get 100 points!';
			answerAchieved = true;
		}

		// Gotten in two guesses
		else if (score == 2) {
			document.getElementById("message").innerHTML = 'You guessed the <span id="right">right</span> answer in 2 moves. You get 50 points!';
			answerAchieved = true;
		}

		// Gotten in three guesses
		else if (score == 3) {
			document.getElementById("message").innerHTML = 'You guessed the <span id="right">right</span> answer in 3 moves. You get 25 points!';
			guessed = true;
		}

		// Gotten in three+ guesses
		else {
			document.getElementById("message").innerHTML = 'You finally guessed the <span id="right">right</span> answer. You get 0 points. :(';
			answerAchieved = true;
		}
	}

	// If guess was too high
	else if (userInput > randomNumber) {
		document.getElementById("message").innerHTML = '<span id="wrong">Wrong</span> answer. Guess lower.'
	}

	// If guess was too low
	else if (userInput < randomNumber) {
		document.getElementById("message").innerHTML = '<span id="wrong">Wrong</span> answer. Guess higher.'
	}
}
