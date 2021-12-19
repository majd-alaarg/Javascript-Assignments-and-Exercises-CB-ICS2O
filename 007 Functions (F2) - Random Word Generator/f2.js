//Random word generation calculation
function randomWord(){
	
	//Array of random words
	var possibleWords = ["Scarce", "Dog", "Cat", "Putin", "Europe", "Sweden", "Michael Scott"];
	//Word is accessed based on randomly generated index (Index range from 0-6)
	return possibleWords[Math.floor(7*Math.random())];
}

//myFunction begins here starts on click of "generate" button
function myFunction() {
	//Output area to div identified as "wordOutput"
	document.getElementById("wordOutput").innerHTML = "Your random word is: " + randomWord();
}
