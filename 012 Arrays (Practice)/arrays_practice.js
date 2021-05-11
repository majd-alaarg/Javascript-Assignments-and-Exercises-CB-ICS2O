function arrayPractice() {
	var test1 = new Array(4);
	test1[0] = 98;
	test1[1] = 87;
	test1[2] = 64;
	test1[3] = 82;

	//Index 2 is the third value
	alert(test1[2]);

	//Set sum to 0
	sum = 0

	//Loop addition
	for (i = 0; i < test1.length; i++) {
		sum += test1[i];
		alert("Grade " + (i + 1) + ": " + test1[i])
		alert("Current sum: " + sum);
	}

	//Output
	alert("Final sum: " + sum);

	//Calculate
	document.getElementById("output").innerHTML = "Grades: " + test1.join(", ") + "<br> Average of the four grades: " + (sum / 4);
}

function arrayExercise1() {
	const MAXSIZE = 10;
	var sample = new Array(MAXSIZE);

	//Initialize all elements to 0
	for (i = 0; i < MAXSIZE; i++) {
		sample[i] = 0;
	}

	//3rd element at index 2
	sample[2] = 28;

	//Sum of 2nd and 3rd elements at 10th element
	sample[9] = sample[1] + sample[2];

	//Copy the value of 1st and 8th elements
	sample[7] = sample[0];

	//Swap 1st and 2nd values
	var temp = sample[0];
	sample[0] = sample[1];
	sample[1] = temp;

	//Output
	document.getElementById("output").innerHTML = sample;
}

function arrayExercise2() {

	//New array holds grades
	var grades = new Array(27);

	//New array holds student numbers
	var studentNumber = new Array(27);

	//Set all grades elements to 90. Generate student numbers
	for (i = 0; i < 27; i++) {
		grades[i] = 90;
		//Random numbers with three digits
		studentNumber[i] = Math.floor(900 * Math.random() + 100);
	}

	//Output
	//document.getElementById("output").innerHTML = grades + "\n" + studentNumber;

	//Get output box
	var box = document.getElementById("output");
	
	//Create new table 
	var table = document.createElement('table'),
		thead = document.createElement('thead'),
		tbody = document.createElement('tbody'),
		th,
		tr,
		td;
	
	//Table header
	th = document.createElement('th'),
		th.innerHTML = "Student Number";
	//Append header to table
	table.appendChild(th);
	th = document.createElement('th');
	th.innerHTML = "Grade"
	
	//Append table elements to table
	table.appendChild(th);
	table.appendChild(thead);
	table.appendChild(tbody);

	//Output table
	output.appendChild(table);
	
	//Use loop to fill up the table
	for (var i = 0; i < grades.length; i++) {
		tr = document.createElement('tr'),
			//for county
			td = document.createElement('td');
		td.innerHTML = studentNumber[i];
		tr.appendChild(td);

		//for capital
		td = document.createElement('td');
		td.innerHTML = grades[i];
		tr.appendChild(td);
		tbody.appendChild(tr);
	}
}
