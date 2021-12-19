//myFunction() begins

function myFunction() {
  var inputScore, levelGrade;

  //At first, I attempted to receive the input via a prompt but then opted for a text input instead.
  //inputScore = prompt("Please enter a score out of 100");
  //inputScoure = Number(inputScore)

  //The value of the user's input into the form is retrieved and proceeds to go through a series of if/else statements to determine the corresponding letter grade
  var inputScore = document.getElementById("gradeInput").value;
  //Any other values returns INVALID grade
  
  //I was going to use (isNaN(grade)) to verify user's input, however, instead retreived input from a number form box
  if (inputScore > 100 || inputScore < 0) {
    levelGrade = "Invalid Entry";
  }

  //Instead of the else/if statements, you could use a switch to reduce execution time by accessing and evaluating the statements which are mapped to their respective value. That way, the code doesn't run through each possibility.
  else if (inputScore >= 97) {
    levelGrade = "A+";
  } else if (inputScore >= 87) {
    levelGrade = "A";
  } else if (inputScore >= 80) {
    levelGrade = "A-";
  } else if (inputScore > 75) {
    levelGrade = "B+";
  } else if (inputScore == 75) {
    levelGrade = "B";
  } else if (inputScore >= 70) {
    levelGrade = "B-";
  } else if (inputScore >= 67) {
    levelGrade = "C+";
  } else if (inputScore >= 63) {
    levelGrade = "C";
  } else if (inputScore >= 60) {
    levelGrade = "C-";
  } else if (inputScore >= 55) {
    levelGrade = "D+";
  } else if (inputScore > 50) {
    levelGrade = "D";
  } else if (inputScore >= 50) {
    levelGrade = "D-";
  }
  //Could end with else if (inputScore < 50), however, to speedup runtime, it ends with "else" to avoid an extra if check 
  else {
    levelGrade = "R";
  }


  //Outputted levelGrade
  document.getElementById("gradeOutput").innerHTML = "Your grade is: " + levelGrade;
}

//myFunction() ends
