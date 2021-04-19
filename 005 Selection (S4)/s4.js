var yearInput, document, msg;

//myFunction begins here. The user's year input is retrieved and assigned to a variable which is then run through if/else statements
function myFunction() {
	var yearInput = document.getElementById("yearInput").value;

	//Calculations are based on the leap year algorithm
	if ((yearInput % 4 == 0) && (yearInput % 100 != 0) || (yearInput % 4 == 0) && (yearInput % 100 == 0) && (yearInput % 400 == 0)) {
		msg = "The year you have inputted <b>is a leap year</b>"
	} else{
		msg = "The year you have inputted <b>IS NOT a leap year</b>"
	}

	//The following code gives the leap year output by filling in the previous "message" placeholder in the HTML
	document.getElementById("message").innerHTML = msg + "!";

	//The following code outputs a small message under the form inputs prompting the user to shake the box
	document.getElementById("shake_prompt").innerHTML = "Hover over the mystery frog to find out whether or not it's a leap year";

	//The following code retrieves the mystery frog image and associated the "shake" class to it to activate the animation
	var shake = document.getElementById("image_box");
	shake.classList.add("shake");

}
