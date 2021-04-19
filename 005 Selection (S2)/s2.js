//myFunction begins here. Random number is generated and associated with a message/prediction which is then ouputted to user
function myFunction() {

	var userQuestion, randomNumber, outputMessage;

	//A random number is generated using the following math function. The result of the math function will be whole integers between 1-20 since the average Magic 8 Ball contains a 20-sided die.
	randomNumber = Math.floor(20 * Math.random() + 1);

	//Based on the random number value, it's run through this series of if/else if statements which assign each possible value a Magic 8 Ball standardized response.
	if (randomNumber == 1) {
		outputMessage = "It is certain.";
	} else if (randomNumber == 2) {
		outputMessage = "Reply hazy, try again.";
	} else if (randomNumber == 3) {
		outputMessage = "It is decidedly so.";
	} else if (randomNumber == 4) {
		outputMessage = "Ask again later.";
	} else if (randomNumber == 5) {
		outputMessage = "Without a doubt.";
	} else if (randomNumber == 6) {
		outputMessage = "Better not tell you now.";
	} else if (randomNumber == 7) {
		outputMessage = "Yes – definitely.";
	} else if (randomNumber == 8) {
		outputMessage = "Cannot predict now.";
	} else if (randomNumber == 9) {
		outputMessage = "You may rely on it.";
	} else if (randomNumber == 10) {
		outputMessage = "Concentrate and ask again.";
	} else if (randomNumber == 11) {
		outputMessage = "As I see it, yes.";
	} else if (randomNumber == 12) {
		outputMessage = "Don't count on it.";
	} else if (randomNumber == 13) {
		outputMessage = "Most likely.";
	} else if (randomNumber == 14) {
		outputMessage = "My reply is no.";
	} else if (randomNumber == 15) {
		outputMessage = " Outlook good.";
	} else if (randomNumber == 16) {
		outputMessage = "My sources say no.";
	} else if (randomNumber == 17) {
		outputMessage = "Yes.";
	} else if (randomNumber == 18) {
		outputMessage = "Outlook not so good.";
	} else if (randomNumber == 19) {
		outputMessage = "Signs point to yes.";
	} else if (randomNumber == 20) {
		outputMessage = "Very doubtful.";
	}


	//The message is then outputted to the div identified as "message" placing the outPut message in the middle of the 8-Ball
	document.getElementById("message").innerHTML = outputMessage;

	//Shake animation. As a part of the Javascript function, on click, the eight ball is assigned an extra class, "shake", which subsequently activates the shaking animation programmed through CSS keyframes
	var element = document.getElementById("ball");
	element.classList.add("shake");

	//Text appear. The output message is assigned an extra class, "appear", which allows it to be animated through CSS making it appear after the shaking animation is done.
	var appear = document.getElementById("message");
	appear.classList.add("appear");
}
