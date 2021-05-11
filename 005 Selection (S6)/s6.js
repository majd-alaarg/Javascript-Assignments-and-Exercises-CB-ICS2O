//Please go full screen for maximum experience

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
	
	document.getElementById("header").innerHTML = "How many questions would you like?"

}
//Game start function ends

//The myFunction() function is triggerred when users click the start button.
function myFunction() {

	//Tracking correct answers
	score = 0


	//Takes in how many questions the user would like
	var desiredQuestions;
	desiredQuestions = document.getElementById("desired-questions").value;


	//Loops as many times as user indicated
	for (i = 1; i <= desiredQuestions; i++) {
		//Generating random numbers
		var randomNumber1, randomNumber2;
		randomNumber1 = Math.floor(15 * Math.random() + 1);
		randomNumber2 = Math.floor(15 * Math.random() + 1);

		//Generates the math operation
		var possibleOperations, sign;
		//Array of possible operations
		possibleOperations = [" + ", " - "];
		//Random operation is chosen from the array and defined as "sign"
		sign = possibleOperations[Math.floor(2 * Math.random() + 0)];
		//console.log(sign);


		//Generate math question
		var question, correctAnswer, questionReturn;

		if (sign == " + ") {
			question = String(randomNumber1) + sign + String(randomNumber2);
			correctAnswer = randomNumber1 + randomNumber2;
		} else {
			question = String(randomNumber1) + sign + String(randomNumber2);
			correctAnswer = randomNumber1 - randomNumber2;
		}
		questionReturn = String(question) + " = " + correctAnswer;


		//Collecting and evaluating user input
		var userInput, score;
		userInput = prompt(question);
		if (userInput == correctAnswer) {
			//If user get answer right, score goes up
			score++;
			//If right, output message
			alert("That's right! " + questionReturn + "\nYou answered: " + userInput);
		} else {
			//If wrong, no change in score
			alert("That's wrong! The right answer is: " + questionReturn + "\nYou answered: " + userInput);
		}

	}

	//Evaluation is outside of for loop so that it is executed at the end

	//Determining output messages
	var outputMessage, userPercent;
	outputMessage = "Congratulations, you got <b> " + score + " questions</b> <span id='right'>right!</span>";
	userPercent = (score / desiredQuestions) * 100;
	document.getElementById("outputMessage").innerHTML = outputMessage + "<br>" + "You got a " + userPercent + "%";


	//Prize outputs	
	//Prize decisions
	var userPrize, userPrizeImage;

	//If % > 90
	if (userPercent > 90) {
		userPrize = "Boat";
		userPrizeImage = "prize1.png";
	}
	//If % > 80
	else if (userPercent > 80) {
		userPrize = "Car";
		userPrizeImage = "prize2.png";
	}
	//If % > 70
	else if (userPercent >= 70) {
		userPrize = "Mars Bar";
		userPrizeImage = "prize3.png";
	}
	//If % < 70
	else {
		userPrize = "lump of coal";
		userPrizeImage = "prize4.png";
	}


	//Shake mystery box
	var shake = document.getElementById("image_box");
	shake.classList.add("shake");

	//Reveal prize, make visible
	var appear = document.getElementById("outputContainer");
	appear.classList.add("remove");

	//Prize output message
	document.getElementById("message").innerHTML = "You win a " + userPrize;
	document.getElementById("prizeImage").src = userPrizeImage;

}
//Game start function ends
