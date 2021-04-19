var birthMonth, birthYear, birthDay, document;

//myFunction begins here. 
//User input is retrieved and assigned to a variable which is then run through if/else statements
function myFunction() {
	var birthMonth = document.getElementById("birthMonth").value;
	var birthDay = document.getElementById("birthDay").value;
	var birthYear = document.getElementById("birthYear").value;

	if (((birthMonth == "January") && (birthDay >= 20)) || ((birthMonth == "February") && (birthDay <= 18))) {
		var msg = "You are an Aquarius";

	} else if (((birthMonth == "February") && (birthDay >= 19)) || ((birthMonth == "March") && (birthDay <= 20))) {
		msg = "You are a Pices";

	} else if (((birthMonth == "March") && (birthDay >= 21)) || ((birthMonth == "April") && (birthDay <= 19))) {
		msg = "You are an Aries";

	} else if (((birthMonth == "April") && (birthDay >= 20)) || ((birthMonth == "May") && (birthDay <= 20))) {
		msg = "You are a Taurus";

	} else if (((birthMonth == "May") && (birthDay >= 21)) || ((birthMonth == "June") && (birthDay <= 20))) {
		msg = "You are a Gemini";

	} else if (((birthMonth == "June") && (birthDay >= 21)) || ((birthMonth == "July") && (birthDay <= 22))) {
		msg = "You are a Cancer";

	} else if (((birthMonth == "July") && (birthDay >= 23)) || ((birthMonth == "August") && (birthDay <= 22))) {
		msg = "You are a Leo";

	} else if (((birthMonth == "August") && (birthDay >= 23)) || ((birthMonth == "September") && (birthDay <= 22))) {
		msg = "You are a Virgo";

	} else if (((birthMonth == "September") && (birthDay >= 23)) || ((birthMonth == "October") && (birthDay <= 22))) {
		msg = "You are a Libra";

	} else if (((birthMonth == "October") && (birthDay >= 23)) || ((birthMonth == "November") && (birthDay <= 21))) {
		msg = "You are a Scorpio";

	} else if (((birthMonth == "November") && (birthDay >= 22)) || ((birthMonth == "December") && (birthDay <= 21))) {
		msg = "You are a Sagittarius";

	} else if (((birthMonth == "December") && (birthDay >= 22)) || ((birthMonth == "January") && (birthDay <= 19))) {
		msg = "You are a Capricorn";

	}

	//The following code gives the user their Zodiac sign by filling in the previous "message" placeholder with the output message
	document.getElementById("message").innerHTML = msg + "!";

	//The following code outputs a small message under the form inputs prompting the user to shake the box
	document.getElementById("shake_prompt").innerHTML = "Hover over the mystery box to find out your Zodiac sign!";

	//The following code retrieves the mystery box image and associated the "shake" class to it to activate the animation
	var shake = document.getElementById("image_box");
	shake.classList.add("shake");

}
