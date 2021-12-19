function complimentFunction() {
	//Characteristics
	var characteristics = ["eyes", "brains", "face", "intellect", "laugh", "strength"];
	
	//Adjectives
	var adjectives = ["a beautiful", "an amazing", "a brilliant", "a nice", "an respectable", "a gorgeous"];
	
	//Nouns
	var nouns = ["hero", "genius", "unicorn", "wrestler", "tax evader", "star"];

	//Form compliment
	var compliment = "You have the " + characteristics[randomNum()] + " of " + adjectives[randomNum()] + " " + nouns[randomNum()] + "!";
	
	//Output
	document.getElementById("output").innerHTML = compliment;
}

function randomNum(){
	//Return random rumber
	return Math.floor(6*Math.random());
}