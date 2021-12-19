function gradeVerification() {
	var grades = document.getElementById("string").value;
	const l = grades.length
	var mode = "";
	var average;
	var countA = 0;
	var countB = 0;
	var countC = 0;
	var countF = 0;

	var sum = 0;
	for (i = 0; i < grades.length; i++) {
		if (grades.charAt(i) == "A") {
			sum += 90;
		} else if (grades.charAt(i) == "B") {
			sum += 80;
		} else if (grades.charAt(i) == "C") {
			sum += 70;
		} else if (grades.charAt(i) == "F") {
			sum += 50;
		}
		average = sum / l;
	}
	console.log("The mean is: " + average);

	for (i = 0; i < l; i++) {
		if (grades.charAt(i) == "A") {
			countA++;
		} else if (grades.charAt(i) == "B") {
			countB++;
		} else if (grades.charAt(i) == "C") {
			countC++;
		} else if (grades.charAt(i) == "F") {
			countF++;
		}
	}
	if (countA > countB && countA > countC && countA > countF) {
		mode = "A";
	} else if (countB > countA && countB > countC && countB > countF) {
		mode = "B";
	} else if (countC > countB && countC > countA && countC > countF) {
		mode = "C";
	} else if (countF > countB && countF > countC && countF > countA) {
		mode = "F";
	}
	console.log("The mode of the string of grades: " + mode);

	countA = 0;
	countB = 0;
	countC = 0;
	countF = 0;
	var order = "";
	for (i = 0; i < l; i++) {
		if (grades.charAt(i) == "A") {
			countA++;
		} else if (grades.charAt(i) == "B") {
			countB++;
		} else if (grades.charAt(i) == "C") {
			countC++;
		} else if (grades.charAt(i) == "F") {
			countF++;
		}
	}
	for (x = 0; x < countA; x++) {
		order += "A";
	}
	for (y = 0; y < countB; y++) {
		order += "B";
	}
	for (z = 0; z < countC; z++) {
		order += "C";
	}
	for (w = 0; w < countF; w++) {
		order += "F";
	}
	console.log("The sorted string: " + order);
	var median = Math.ceil((order.length / 2) - 1);
	median = order.charAt(median);
	if (median == "A") {
		median = 90;
	} else if (median == "B") {
		median = 80;
	} else if (median == "C") {
		median = 70;
	} else if (median == "F") {
		median = 50;
	}
	console.log("The median is: " + median);
	var guessMean = document.getElementById("mean").value;
	var guessMode = document.getElementById("mode").value;
	var guessMedian = document.getElementById("median").value;
	if (mode == guessMode && ((guessMean - 2) == average || (guessMean - 1) == average || guessMean == average || (average - 1) == guessMean || (average - 2) == guessMean) && ((guessMedian - 2) == median || (guessMedian - 1) == median || guessMedian == median || (median - 2) == guessMedian || (median - 1) == guessMedian)) {
		console.log("Values were declared correctly and were within the margin of error");
	} else {
		console.log("Values were declared incorrectly and were not within the margin of error");
	}
}
