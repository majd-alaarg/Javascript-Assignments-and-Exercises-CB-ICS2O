function sumFunction() {
	var userMin = document.getElementById("userMin").value;
	var userMax = document.getElementById("userMax").value;

	//Set input sum
	var inputSum = 0;
	
	for (i = userMin; i <= userMax; i++) {
		//Ensure that i is being evaluated as a number
		i = Number(i);

		//Error, for some reason it's not calculating min.3 max.100
		//Every time it goes around, i is getting added on
		inputSum += i;
	}

	//Output
	document.getElementById("sumOutput").innerHTML = inputSum;
}
