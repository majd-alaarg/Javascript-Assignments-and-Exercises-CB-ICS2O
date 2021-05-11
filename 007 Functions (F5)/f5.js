function myFunction() {
	var userName = document.getElementById("name").value;
	var userEmail = document.getElementById("email").value;
	var userAddress = document.getElementById("address").value;
	var userCity = document.getElementById("city").value;
	var userState = document.getElementById("state").value;
	var userPostal = document.getElementById("postal").value;
	var userCountry = document.getElementById("countries").value;
	var userReturning = document.getElementById("yes").checked;
	var userNotReturing = document.getElementById("no").checked;
	var userProductQuestion = document.getElementById("product").checked;
	var userOrderQuestion = document.getElementById("order").checked;
	var userWarrantyQuestion = document.getElementById("warranty").checked;
	var userInquiryQuestion = document.getElementById("inquiry").checked;
	var userComputerType = document.getElementById("computer-type").value;
	var userRating = document.getElementById("rating").value;
	var userComment = document.getElementById("comment").value;

	//Intro with basic info
	var message = "Hello " + userName + "." + "We look forward to sending an email from your address: " + userEmail + ".";

	var returnMessage;
	//Check to see if user is returning customer
	if (userReturning == true) {
		returnMessage = "We are happy to see you again";
	} else {
		returnMessage = "Hello, for the first time";
	}

	var countryMessage, shippingMessage;
	//Location evaluation
	if (userCountry == "Canada") {
		countryMessage = "Hello there fellow Canadian!";
	} else {
		countryMessage = "Hello there foreigner!";
	}

	if (userCity == "Ottawa" || userState == "Ontario") {
		shippingMessage = "Local and provincial deliveries take 1-2 weeks";
	} else if (userCountry == "Canada") {
		shippingMessage = "Out of province shipping takes 3-4 weeks";
	} else {
		shippingMessage = "International shipping takes 5 weeks. Customs may apply";
	}
	alert(shippingMessage);


	//Postal Code evaluation
	//Used >10 since the max postal code length in the world is 10 digits
	if (userPostal.length > 10) {
		alert("Please enter a valid postal code");
	}

	//Evaluating User's Computer
	console.log(userComputerType);
	var appreaciationMessage, commentOutput;
	//Experience Evaluation
	if (userRating > 8) {
		appreaciationMessage = "We are so happy that you love our service";
	} else if (userRating > 5) {
		appreaciationMessage = "We are so happy that you are pleased our service";
	} else if (userRating > 3) {
		appreaciationMessage = "How can we make our service better";
	} else {
		appreaciationMessage = "We don't care about your opinion";
	}
	alert(appreaciationMessage);

	//Check for glitch problems
	if (userComment.includes("glitch") == true) {
		commentOutput = "We see you are experiencing glitches, please contact your computer manufacturer";
	}


	//User inquiry check boxes
	if (userOrderQuestion == true) {
		var userNeeds = "an order";
	}
	if (userProductQuestion == true) {
		userNeeds += ", a product";
	}
	if (userWarrantyQuestion == true) {
		userNeeds += ", a warranty";
	}
	if (userInquiryQuestion == true) {
		userNeeds += ", and have a general inquiry.";
	}

	//output
	document.getElementById("nameOutput").innerHTML = userName;
	document.getElementById("emailOutput").innerHTML = userEmail;
	document.getElementById("addressOutput").innerHTML = userAddress;
	document.getElementById("cityOutput").innerHTML = userCity;
	document.getElementById("locationOutput").innerHTML = userCity + ", " + userState + ", " + userCountry;
	document.getElementById("returningOutput").innerHTML = returnMessage;
	document.getElementById("helpOutput").innerHTML = userOrderQuestion;
	document.getElementById("computerOutput").innerHTML = userComputerType;
	document.getElementById("ratingOutput").innerHTML = userRating;
	document.getElementById("commentOutput").innerHTML = commentOutput;
	document.getElementById("questionOutput").innerHTML = userNeeds;
	document.getElementById("commentOutput").innerHTML = userComment;
}
