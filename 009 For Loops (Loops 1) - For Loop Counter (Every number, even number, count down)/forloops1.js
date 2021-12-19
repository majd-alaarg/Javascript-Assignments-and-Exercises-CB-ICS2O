//Counting function
function countEveryFunction() {
	//Retrieve values
	var userMin = document.getElementById("userMin").value;
	var userMax = document.getElementById("userMax").value;

	//declaring countList variable
	var countList = "";

	//Loop depends on the userMin and userMax
	for (i = userMin; i <= userMax; i++) {
		//everytime this is run through, countList gets added onto
		countList += i + ", ";

	}

	//Remove final comma, for look
	var userOutput = countList.substring(0, (countList.length - 2));

	//Output
	document.getElementById("output").innerHTML = userOutput;
}

function countEvenFunction() {
	//Retrieve Values
	var userMin = document.getElementById("userMin").value;
	var userMax = document.getElementById("userMax").value;

	//Defining outputList
	var outputList = "";

	for (i = userMin; i <= userMax; i++) {
		
		//Output list is only modified if "i" is an even number
		if (i % 2 == 0) {
			outputList += i + ", ";
		}
	}

	//Remove final comma, for look
	var userOutput = outputList.substring(0, (outputList.length - 2));
	
	//Output
	document.getElementById("output").innerHTML = userOutput;
}

//Counting Down function
function countDownFunction() {
	//Retrieve values
	var userMin = document.getElementById("userMin").value;
	var userMax = document.getElementById("userMax").value;

	//declaring countList variable
	var countList = "";

	//Loop depends on the userMin and userMax
	for (i = userMax; i >= userMin; i--) {
		//everytime this is run through, countList gets added onto
		countList += i + ", ";

	}

	//Remove final comma, for look
	var userOutput = countList.substring(0, (countList.length - 2));

	//Output
	document.getElementById("output").innerHTML = userOutput;
}