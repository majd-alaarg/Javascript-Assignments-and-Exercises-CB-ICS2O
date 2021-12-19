var letters = "abcdefghijklmnopqrstuvwxyz!#$@%^&*()_-+=0123456789";
var numLetters = Math.floor(Math.random()*12 + 1);
var word = '';
var randomLet = 0, character =0;
function createPassword(){
  for (i = 0; i <= numLetters; i++) {
    randomLet = Math.floor(Math.random()*50+1);
    character = letters.charAt(randomLet);
    word = word + character;
  }
  console.log(word);
  return word;
}
var randomWord = createPassword();
var guessed = false;
var guess;
function passwordChecker(){
  while (!guessed) {
    guess = prompt("The length of the secret password is: " +randomWord.length + "\n Guess the word!");
    if (guess == randomWord){
      alert("Right Answer! Are you cheating?");
      guessed = true;
    } else {
      alert("Wrong answer! It's all good, you'll get it next time!");
    }
  }
}