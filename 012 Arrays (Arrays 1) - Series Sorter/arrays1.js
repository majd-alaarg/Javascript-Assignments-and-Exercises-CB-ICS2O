function myFunction() {
	var newArray = new Array(9);
	sum = 0;
	//Fill array and add
	for (i = 0; i <= 9; i++) {
		newArray[i] = Math.floor(100 * Math.random() + 1);
		//sum
		sum += newArray[i];
	}

	//Added compare function parameters to ensure that it's sorted in ascending order as it occasionally sorts in decreasing order
	var sortedArray = newArray.sort(function (a, b) {
		return a - b
	});

	//Output array
	document.getElementById("arrayOutput").innerHTML = newArray;

	//Display average
	document.getElementById("averageOutput").innerHTML = sum / 10;

	//Output largest number
	//After being sorted, index 9 would be the largest number
	document.getElementById("largeOutput").innerHTML = sortedArray[9];
}
