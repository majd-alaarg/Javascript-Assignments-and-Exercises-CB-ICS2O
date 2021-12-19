var numberGrade = prompt("Enter your numerical grade");
var msg;
  if (numberGrade > 100 || numberGrade < 0) {
  msg = "Invalid Entry";
  } else if (numberGrade < 50) {
  msg = "R";
  } else if (53 > numberGrade) {
  msg = "D-";
  } else if (57 > numberGrade) {
  msg = "D";
  } else if (60 > numberGrade) {
  msg = "D+";
  } else if (63 > numberGrade) {
  msg = "C-";
  } else if (67 > numberGrade) {
  msg = "C";
  } else if (70 > numberGrade) {
  msg = "C+";
  } else if (73 > numberGrade) {
  msg = "B-";
  } else if (77 > numberGrade && numberGrade >= 73) {
  msg = "B";
  } else if (80 > numberGrade) {
  msg = "B+";
  } else if (87 > numberGrade) {
  msg = "A-";
  } else if (95 > numberGrade) {
  msg = "A";
  } else { 
  msg = "A+";
  }
document.write("Your grade is " +msg)