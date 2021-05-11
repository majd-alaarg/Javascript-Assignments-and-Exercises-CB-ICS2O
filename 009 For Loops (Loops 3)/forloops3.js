//Function starts
function wordCountFunction() {
	//Retrieve sentence
	var sentenceInput = document.getElementById("userSentence").value;

	//Split it to make an array
	var sentenceArr = sentenceInput.split(" ");

	//Output
	document.getElementById("countOutput").innerHTML = sentenceArr.length; //gets length of the array

	/*
	//Way to do it with the loop
	var count = 0;

	for (i = 0; i <= sentenceInput.length; i++) {
		if (sentenceInput.charAt(i) == " ") {
			count++
		}
	}

	//Add one to account for last word
	console.log(count + 1)
	*/
}
