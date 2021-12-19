var number, userScore, userAnswer1, prize, imageChoice;
number = Math.floor(10*Math.random()+1);
userAnswer1 = prompt("Guess a number between 1 and 10!");
if (userAnswer1 == number) {
  document.write("Your guess is correct! You got the correct answer in one attempt!");
  userScore = "100";
  prize = "Toyota Corolla";
  imageChoice ="tc.jpg";
} else {
    if (userAnswer1 > number){
      userAnswer1=prompt("Your guess was too high! Guess lower!")
    } else {
      userAnswer1=prompt("Your guess was too low! Guess higher!")
        } if (userAnswer1 == number) {
        document.write("Your guess is correct! You got the correct answer in two attempts!");
        userScore = "50";
        prize = "new phone";
        imageChoice ="cellphone.jpg";
        } else {
          if (userAnswer1 > number){
            userAnswer1=prompt("Your guess was too high! Guess lower!")
          } else {
            userAnswer1=prompt("Your guess was too low! Guess higher!")
            } if (userAnswer1 == number) {
              document.write("Your guess is correct! You got the correct answer in three attempts!");
              userScore = "25";
              prize = "basketball";
              imageChoice = "bb.jpg";
            } else {
              document.write("<br> Sorry you did not get the correct answer!")
              userScore = "0";
              prize = "feeling of shame for losing so terribly"
              imageChoice = "loser.jpg";
    }
  }
}
document.write("<br><br> Your score is " +userScore +" and you have won a " +prize +". Thank you for playing the higher or lower guessing game!"); 
document.getElementById("prizePic").src = imageChoice;