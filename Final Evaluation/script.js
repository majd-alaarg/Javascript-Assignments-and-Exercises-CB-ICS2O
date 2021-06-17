//Created by Majd Al-Aarg on May 18, 2021
//I am working in Brackets, my code editor. I'll be copying and pasting my blocks as I go like you said.

function validate() {
	//Take in the user inputted four digit SIN.
	var userSin = String(document.getElementById("userSin").value);


	//Take in the two digit province of birth
	var province = document.getElementById("province").value;


	//Verify province of birth is Quebec or Ontario
	//Don't need to verify input length since I included HTML parameter, maxLength.
	if (!(province == "ON" || province == "QC")) {
		alert("Please enter a valid province, either Quebec or Ontario");
		//If invalid, stop
		return;
	} else {
		alert("Valid Province")
	}


	//Check to see if SIN length is valid
	if (userSin.length != 4) {
		alert("Invalid SIN input, enter four digits");
		//If invalid, stop
		return;
	} else {
		alert("Valid SIN length")
	}


	//Verify the SIN is from the province of birth
	//Ontario
	if (province == "ON") {
		if (!(userSin.charAt(0) == "4" || userSin.charAt(0) == "5")) {
			alert("Invalid SIN for Ontario.");
			//If invalid, stop
			return;
		} else {
			alert("Valid SIN for Ontario");
		}
	} else { //Quebec
		if (userSin.charAt(0) != "2") {
			alert("Invalid SIN for Quebec");
			//If invalid, stop
			return;
		} else {
			alert("Valid SIN for Quebec");
		}
	}

	//If the province is valid, calculate the check digit for the number properly.
	//Collecting and storing the SIN as a string and assigning digits to varaible
	var p = Number(userSin.charAt(0));
	var q = Number(userSin.charAt(1));
	var r = Number(userSin.charAt(2));
	var s = Number(userSin.charAt(3));

	//Using brackets to double ensure it's math
	//These steps are only split up like this for debugging, could be done all in one line
	var step1 = (p + r);
	var step2 = (2 * q);
	var step3 = (2 * s);
	var stepTotal = (step1 + step2 + step3);
	var lastDigit = stepTotal % 10;

	//Check digit
	var checkDigit = (10 - lastDigit);
	var outputSin = userSin + String(checkDigit);

	//Output check digit
	alert("Your check digit is: " + checkDigit)

	//Output the SIN with check digit
	alert("Your Sin is: " + outputSin);
}



//4++ test

//Track invalids
var invalid = 0;

//Track checks
var check = 0;

function part2() {
	//Check
	//Only start warnings if 4 attempts
	while (check > 4) {
		if ((Math.floor(invalid / check) * 100) > 11) {
			alert("Warning... Warning....");
		} else{
			break;
		}
	}
	//Increment number of check
	check++;

	//Take in a SIN number as a string
	var userSin2 = String(document.getElementById("userSin2").value);
	alert("Your SIN: " + userSin2);


	//Province of Birth
	var province = document.getElementById("province2").value;
	alert("Your province: " + province);

	//Check to see if SIN length is valid
	if (userSin2.length != 9) {
		alert("Invalid SIN input, enter 9 digits. No spaces");
		invalid++;
		return;
	} else {
		alert("Valid SIN length")
	}

	//Don't need to verify input length since I included HTML parameter, maxLength.


	//Atlantic
	if (province == 'NB' || province == 'NL' || province == 'NS' || province == 'PE') {
		if (userSin2.charAt(0) != "1") {
			alert("Invalid SIN start");
			invalid++;
			return;
		} else {
			alert("Valid SIN start");
		}
	}


	//Quebec
	else if (province == "QC") {
		if (userSin2.charAt(0) != "2") {
			alert("Invalid SIN start");
			invalid++;
			return;
		} else {
			alert("Valid SIN start");
		}
	}


	//Ontario
	else if (province == 'ON') {
		if (!(userSin2.charAt(0) == "4" || userSin2.charAt(0) == "5")) {
			alert("Invalid SIN start");
			invalid++;
			return;
		} else {
			alert("Valid SIN start");
		}
	}


	//Prairies
	else if (province == 'MB' || province == 'SK' || province == 'AB') {
		if (userSin2.charAt(0) != "6") {
			alert("Invalid SIN start");
			invalid++;
			return;
		} else {
			alert("Valid SIN start")
		}
	}


	//Pacific
	else if (province == 'NU' || province == 'NT' || province == 'BC' || province == 'YT') {
		if (userSin2.charAt(0) != "7") {
			alert("Invalid SIN start");
			invalid++;
			return;
		} else {
			alert("Valid SIN start")
		}
	}


	//Invalid province
	else {
		alert("Invalid Province");
		invalid++;
		return;
	}

	//Based on model
	var p = Number(userSin2.charAt(0));
	var q = Number(userSin2.charAt(1));
	var r = Number(userSin2.charAt(2));
	var s = Number(userSin2.charAt(3));
	var t = Number(userSin2.charAt(4));
	var u = Number(userSin2.charAt(5));
	var v = Number(userSin2.charAt(6));
	var w = Number(userSin2.charAt(7));
	var x = Number(userSin2.charAt(8));

	//Correct calc
	var step1 = (p + r + t + v);
	var step2 = (Number(String((2 * q)).charAt(0)) + Number(String((2 * q)).charAt(1)) + Number(String((2 * u)).charAt(0)) + Number(String((2 * u)).charAt(1)) + Number(String((2 * s)).charAt(0)) + Number(String((2 * s)).charAt(1)) + Number(String((2 * w)).charAt(0)) + Number(String((2 * w)).charAt(1)));
	var step4 = (step1 + step2);
	var correctCalc = 10 - (step4 % 10);

	if (correctCalc != x) {
		alert("Invalid SIN, invalid digit check");
		invalid++;
		return;
	} else {
		alert("Valid SIN, valid check digit");
	}

}
