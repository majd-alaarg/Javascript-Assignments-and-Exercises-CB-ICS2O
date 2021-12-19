function lettertransform(){
  var randomString = "abcdefghiklmnopqrstuvwxyz";
  var word = document.getElementById("word1").value;
  var letter = document.getElementById("word2").value;
  var randomLetter = randomString.charAt(Math.floor(Math.random()*26)+1);
  var newWord = word.replace(letter, randomLetter);
  document.getElementById("output").innerHTML = "Your new word is: " +newWord;
  console.log(randomLetter);
}