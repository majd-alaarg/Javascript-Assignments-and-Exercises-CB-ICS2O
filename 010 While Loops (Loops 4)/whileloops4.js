function pigLatin() {
	var sentenceInput = document.getElementById("sentenceInput").value;

	//Convert to array to handle each word one by one
	var userSentence = sentenceInput.split(" ");

	//Possible vowels to check for
	var possibleVowels = "aoueiAOUEI";

	//Special Characters
	var specialCharacters = ".,/)(*&^%$#@!~+_-=}{;:><?|''"

	//Initialize newSentence outside loop
	var newSentence = "";

	//Initialize i
	var i = 0;

	//for (i = 0; i <= userSentence.length - 1; i++)
	while (i <= userSentence.length - 1) {
		//Modifications are made to individual words retrieved by their index
		var word = userSentence[i];

		function pigWord() {
			//Make variable for first letter, to lower case to avoid multiple check
			firstLetter = word.charAt(0);

			//Last letter to check for special characters and punctuation
			var lastLetter = word.charAt(word.length - 1);

			//If the first character is present in the possibleVowels string, add "ay" to the end
			if (possibleVowels.includes(firstLetter)) {

				//If a special character or punctuation is present at the end, modify sequence where "ay" comes before
				if (specialCharacters.includes(lastLetter)) {
					word = word.substring(0, word.length - 1) + "ay" + lastLetter + " ";
				}

				//If no punctuation is there, business as usual
				else {
					word += "ay ";
				}
			}

			//If word begins with consonant, create new substring by removing the first character and placing it at the end with "ay";
			else {
				//If a special character or punctuation is present at the end, modify sequence where "ay" comes before
				if (specialCharacters.includes(lastLetter)) {
					word = word.charAt(1).toUpperCase() + word.substring(2, word.length - 1) + firstLetter.toLowerCase() + "ay" + lastLetter + " ";
				}

				//If no punctuation is there, business as usual
				else {
					word = word.charAt(1).toUpperCase() + word.substring(2) + firstLetter.toLowerCase() + "ay ";
				}
			}
			
			//Return
			return word;
		}
		
		//Add the word onto the new sentence
		newSentence += pigWord(word);

		//Increment to allow for loop
		i++
	}

	//Output
	document.getElementById("output").innerHTML = newSentence;
}
