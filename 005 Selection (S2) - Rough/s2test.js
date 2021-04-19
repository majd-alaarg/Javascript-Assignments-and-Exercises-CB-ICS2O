var userQuestion, randomNumber, outputMessage;
userQuestion = prompt("Welcome to Mystic Magic 8 Ball. Ask a question, and your fate will be decided.");


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

document.write(outputMessage);
