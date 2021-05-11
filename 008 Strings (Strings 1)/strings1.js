var userInput1, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10, userInput12, userInput13;

var part;
//Substring test
function mySubstring() {
	userInput1 = document.getElementById("input1").value;
	part = userInput1.substring(4, 12);
	document.getElementById("output1").innerText = part;
}

var wordSearch1, sentenceIndex;
//Index test
function myIndex() {
	userInput2 = document.getElementById("input2").value;
	wordSearch1 = prompt("Enter a word to look for:");
	sentenceIndex = userInput2.indexOf(wordSearch1);
	document.getElementById("output2").innerText = "Your searched word starts at index: " + sentenceIndex;
}

var wordSearch2, sentenceIndex2;
//Last Index test
function myLastIndex() {
	userInput3 = document.getElementById("input3").value;
	wordSearch2 = prompt("Enter a word to look for:");
	sentenceIndex2 = userInput3.lastIndexOf(wordSearch2);
	if (sentenceIndex2 < 0) {
		document.getElementById("output3").innerText = "That word is not in the inputted string";
	} else {
		document.getElementById("output3").innerText = "Your searched word last starts at index: " + sentenceIndex2;
	}
}

var replacementWord, userReplaced;
//Replace function test
function myReplace() {
	userInput4 = document.getElementById("input4").value;
	replacementWord = prompt("What word do you want subbed in");
	userReplaced = userInput4.replace("hello", replacementWord);
	document.getElementById("output4").innerHTML = userReplaced;
}

var lowerCaseOutput;
//To lower case
function myLowerCase() {
	userInput5 = document.getElementById("input5").value;
	lowerCaseOutput = userInput5.toLowerCase();
	document.getElementById("output5").innerHTML = lowerCaseOutput;
}

var upperCaseOutput;
//To lower case
function myUpperCase() {
	userInput6 = document.getElementById("input6").value;
	upperCaseOutput = userInput6.toUpperCase();
	document.getElementById("output6").innerHTML = upperCaseOutput;
}

var inputLength;
//Length function
function myLength() {
	userInput7 = document.getElementById("input7").value;
	inputLength = userInput7.length;
	document.getElementById("output7").innerHTML = "The string you have inputted is " + inputLength + " characters long."
}

var searchWord;
//Include function
function myInclude() {
	userInput8 = document.getElementById("input8").value;
	searchWord = document.getElementById("wordInput8").value;
	if (userInput8.includes(searchWord)) {
		document.getElementById("output8").innerHTML = "Your entered sentence includes the word: " + searchWord;
	} else {
		document.getElementById("output8").innerHTML = "Your entered sentence does not include the word: " + searchWord;
	}
}

var wordInput9;
//Starts with function
function myStartWith() {
	userInput9 = document.getElementById("input9").value;
	wordInput9 = document.getElementById("wordInput9").value;
	if (userInput9.startsWith(wordInput9)) {
		document.getElementById("output9").innerHTML = "Your sentence starts with the string: " + wordInput9;
	} else {
		document.getElementById("output9").innerHTML = "Your sentence does not start with the string: " + wordInput9;
	}
}

var wordInput10;
//Ends with function
function myEndWith() {
	userInput10 = document.getElementById("input10").value;
	wordInput10 = document.getElementById("wordInput10").value;
	if (userInput10.endsWith(wordInput10)) {
		document.getElementById("output10").innerHTML = "Your sentence ends with the substring: " + wordInput10;
	} else {
		document.getElementById("output10").innerHTML = "Your sentence does not end with the substring: " + wordInput10
	}
}

var numberInput11, letterOutput;
//charAt function
function myCharAt() {
	userInput11 = document.getElementById("input11").value;
	numberInput11 = document.getElementById("numberInput11").value;
	letterOutput = userInput11.charAt(numberInput11);
	document.getElementById("output11").innerHTML = "The character at index " + numberInput11 + " is: " + letterOutput;
}

var numberInput12, charCodeOutput;
//charCode At function
function myCharCodeAt() {
	userInput12 = document.getElementById("input12").value;
	numberInput12 = document.getElementById("numberInput12").value;
	charCodeOutput = userInput12.charCodeAt(numberInput12);
	document.getElementById("output12").innerHTML = "The charcode at index " + numberInput12 + " is: " + charCodeOutput;
}

var outout13;
//Char Code from integer function
function myStringFromChar() {
	userInput13 = document.getElementById("numberInput13").value;
	output13 = String.fromCharCode(userInput13);
	document.getElementById("output13").innerHTML = output13;
}
