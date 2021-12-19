var birthMonth, birthYear, birthDay, document;

//myFunction begins here. 
//User input is retrieved and assigned to a variable which is then run through if/else statements

//Instead of using individual inputs in html, you could take in a date input and split it as an array (.split("-"))
function myFunction() {
	var birthMonth = document.getElementById("birthMonth").value;
	var birthDay = document.getElementById("birthDay").value;
	var birthYear = document.getElementById("birthYear").value;

	if (((birthMonth == "January") && (birthDay >= 20)) || ((birthMonth == "February") && (birthDay <= 18))) {
		var msg = "You are an Aquarius";
		userImg = "https://www.thesun.co.uk/wp-content/uploads/2019/09/NINTCHDBPICT000596530379.jpg";

	} else if (((birthMonth == "February") && (birthDay >= 19)) || ((birthMonth == "March") && (birthDay <= 20))) {
		msg = "You are a Pices";
		userImg = "https://s.yimg.com/os/creatr-uploaded-images/2020-02/f2c12b90-571f-11ea-97fe-65607cb99e71";

	} else if (((birthMonth == "March") && (birthDay >= 21)) || ((birthMonth == "April") && (birthDay <= 19))) {
		msg = "You are an Aries";
		userImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aries-zodiac-sign-abstract-night-sky-background-royalty-free-image-1584536731.jpg";

	} else if (((birthMonth == "April") && (birthDay >= 20)) || ((birthMonth == "May") && (birthDay <= 20))) {
		msg = "You are a Taurus";
		userImg = "https://www.datocms-assets.com/7756/1600770888-zodiac-sign-4374405.jpg?auto=enhance%2Cformat&w=1600";

	} else if (((birthMonth == "May") && (birthDay >= 21)) || ((birthMonth == "June") && (birthDay <= 20))) {
		msg = "You are a Gemini";
		userImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gemini-zodiac-sign-abstract-night-sky-background-royalty-free-image-1590508367.jpg";

	} else if (((birthMonth == "June") && (birthDay >= 21)) || ((birthMonth == "July") && (birthDay <= 22))) {
		msg = "You are a Cancer";
		userImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cancer-zodiac-sign-abstract-night-sky-background-royalty-free-image-858078918-1560803578.jpg";

	} else if (((birthMonth == "July") && (birthDay >= 23)) || ((birthMonth == "August") && (birthDay <= 22))) {
		msg = "You are a Leo";
		userImg = "https://www.datocms-assets.com/7756/1600770449-zodiac-sign-4374408.jpg?auto=enhance%2Cformat&w=1600";

	} else if (((birthMonth == "August") && (birthDay >= 23)) || ((birthMonth == "September") && (birthDay <= 22))) {
		msg = "You are a Virgo";
		userImg = "https://www.rd.com/wp-content/uploads/2020/10/Virgo-Blue-Moon-GettyImages-858072842.jpg";

	} else if (((birthMonth == "September") && (birthDay >= 23)) || ((birthMonth == "October") && (birthDay <= 22))) {
		msg = "You are a Libra";
		userImg = "https://blog.prepscholar.com/hs-fs/hubfs/zodiac-sign-4374411_1920.jpg?width=512&name=zodiac-sign-4374411_1920.jpg";

	} else if (((birthMonth == "October") && (birthDay >= 23)) || ((birthMonth == "November") && (birthDay <= 21))) {
		msg = "You are a Scorpio";
		userImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scorpio-zodiac-sign-abstract-night-sky-background-royalty-free-image-1571399986.jpg?crop=1.00xw:0.751xh;0,0.120xh&resize=1200:*";

	} else if (((birthMonth == "November") && (birthDay >= 22)) || ((birthMonth == "December") && (birthDay <= 21))) {
		msg = "You are a Sagittarius";
		userImg = "https://metro.co.uk/wp-content/uploads/2021/01/SAGITTARIUS01-296a.png";

	} else  {	//Could be if (birthMonth == "December" && birthDay >= 22 || birthMonth == "January") && (birthDay <= 19)
		msg = "You are a Capricorn";
		userImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/capricorn-zodiac-sign-abstract-night-sky-background-royalty-free-image-1576705058.jpg";

	} 
	//Before opting for html selection options, I used else to cover input mistakes by giving invalid. 
	//else {msg = "Nothing. Invalid entry";}

	//The following code gives the user their Zodiac sign by filling in the previous "message" placeholder with the output message
	document.getElementById("message").innerHTML = msg + "!";

	//The following code outputs a small message under the form inputs prompting the user to shake the box
	document.getElementById("shake_prompt").innerHTML = "Hover over the mystery box to find out your Zodiac sign!";

	//The following code retrieves the mystery box image and associated the "shake" class to it to activate the animation
	var shake = document.getElementById("image_box");
	shake.classList.add("shake");

	//Outputs image at the bottom (Note: the program could've run only with the magic output box, without the image to be more aestically pleasing. The image output was placed to fulfill requirements.)
	document.getElementById("zodiacImg").src = userImg;
}
