function gradeVerification(){
var grades = document.getElementById("string").value;
const l = grades.length;
var mode = "";
var average;
var countA = 0;
var countB = 0;
var countC = 0;
var countF = 0;
//valid number check
var i = 0;
var amountofValid;
var validLetterCount = 0;
var invalidString = "";
var invalidLettersCount = 0;
var validLetters = ["A", "B", "C", "F"];
if (grades.length == 0) {
  alert("Please enter a value");
} else {
for(i=0; i < grades.length; i++) {
  if (validLetters.includes(grades.charAt(i))){
    validLetterCount++;
  } else 
  {
    if (invalidLettersCount == 0)
    {
      invalidString = grades.charAt(i)
    } 
    else 
    {
       invalidString = invalidString + ", " + grades.charAt(i)
    }
    invalidLettersCount++;
    }
  }
}
validLetters = grades.length - invalidLettersCount;
console.log("You entered: " + validLetters + " valid grades");
//finding mean
  var sum = 0;
  for (i=0; i<grades.length; i++){
    if (grades.charAt(i) == "A"){
      sum += 90;
    } else if (grades.charAt(i) == "B"){
      sum += 80;
    } else if (grades.charAt(i) == "C"){
      sum += 70;
    } else if (grades.charAt(i) == "F"){
      sum += 50;
    }
    average = sum/validLetters;
  }
  console.log("The mean is: " + average);
//finding mode
for (i=0; i<l;i++){
  if(grades.charAt(i) == "A"){
    countA++;
  } else if (grades.charAt(i) == "B"){
    countB++;
  } else if (grades.charAt(i) == "C"){
    countC++;
  } else if (grades.charAt(i) == "F"){
    countF++;
  }
  }
  
  if (countA > countB && countA > countC && countA > countF){
    mode = "A";
  } else if (countB > countA && countB > countC && countB > countF){
    mode = "B";
  } else if (countC > countB && countC > countA && countC > countF){
    mode = "C";
  } else if (countF > countB && countF > countC && countF > countA){
    mode = "F";
  } else if (countA == countB && countA > countC && countA > countF) {
    mode = "A and B";
  } else if (countA == countC && countA > countB && countA > countF) {
    mode = "A and C";
  } else if (countA == countF && countA > countC && countA > countB) {
    mode = "A and F";
  } else if (countB == countC && countB > countA && countB > countF) {
    mode = "B and C";
  } else if (countF == countB && countB > countC && countB > countA) {
    mode = "B and F";
  } else if (countC == countF && countC> countA && countC > countB) {
    mode = "C and F";
  } else if (countA == countB && countA == countC && countA > countF){
    mode = "A, B and C";
  } else if (countA == countB && countA > countC && countA == countF){
    mode = "A, B and F";
  } else if (countA > countB && countA == countC && countA == countF){ 
    mode = "A, C and F";
  } else if (countB > countA && countB == countC && countB == countF){
    mode = "B,C and F";
  } else {
    mode = "A, B, C and F";
  }

  console.log("The mode of the string of grades: " + mode);
// finding median
countA = 0;
countB = 0;
countC = 0;
countF = 0;
 var order = "";
  for (i=0; i < l; i++) {
    if(grades.charAt(i) == "A"){
      countA++;
    } else if (grades.charAt(i) == "B"){
      countB++;
    } else if (grades.charAt(i) == "C"){
      countC++;
    } else if (grades.charAt(i) == "F"){
      countF++;
    }

  }
    for (x=0; x < countA; x++ ) {
     order += "A";
    }
    for (y=0; y < countB; y++ ) {
      order += "B";
    }
    for (z=0; z < countC; z++ ) {
      order += "C";
    }
    for (w=0; w < countF; w++ ) {
      order += "F";
    }
  console.log("The sorted string: " + order);

if (order.length%2 != 0){
  var median = Math.ceil((order.length/2)-1);
  median = order.charAt(median);
  if (median == "A") {
    median = 90;
  } else if (median == "B") {
    median = 80;
  } else if (median == "C") {
    median = 70;
  } else if (median == "F") {
    median = 50;
  }
} else {
  var num1 = Math.ceil((order.length/2)-1);
  var num2 = (Math.ceil((order.length/2)-1)+1);
  num1 = order.charAt(num1);
  num2 = order.charAt(num2);
  if (num1 == "A" && num2 == "B") { 
    median = 85;
  } else if (num1 == "B" && num2 == "C") {
    median = 75;
  } else if (num1 == "C" && num2 == "F") {
    median = 60;
  } else if (num1 == "A" && num2 == "C") {
    median = 80;
  } else if (num1 == "A" && num2 == "F") {
    median = 70;
  } else if (num1 == "B" && num2 == "F") {
    median = 65;
  } else if (num1 == "A" && num2 == "A") {
    median = 90;
  } else if (num1 == "B" && num2 == "B") {
    median = 80;
  } else if (num1 == "C" && num2 == "C") {
    median = 70;
  } else if (num1 == "F" && num2 == "F") {
    median = 50;
  }
    console.log("The median is: " + median);

}
//checking user input and actual answers
var guessMean = document.getElementById("mean").value;
var guessMode = document.getElementById("mode").value;
var guessMedian = document.getElementById("median").value;
  if (mode == guessMode && ((guessMean - 2) == average || (guessMean - 1) == average || guessMean == average || (average - 1) == guessMean || (average -2) == guessMean) && ((guessMedian -2) == median || (guessMedian - 1) == median || guessMedian == median || (median - 2) == guessMedian || (median -1) == guessMedian)) {
   console.log("Values were declared correctly and were within the margin of error");
  } else {    
  console.log("Values were declared incorrectly and were not within the margin of error");
  }
// 4++ section -- percentage and count of each grade tabulated 
var aPercent = (countA/validLetters)*100;
var bPercent = (countB/validLetters)*100;
var cPercent = (countC/validLetters)*100;
var fPercent = (countF/validLetters)*100;
document.getElementById("countA").innerHTML = +countA;
document.getElementById("countB").innerHTML = +countB;
document.getElementById("countC").innerHTML = +countC;
document.getElementById("countF").innerHTML = +countF;
document.getElementById("aPercent").innerHTML = + aPercent +"%";
document.getElementById("bPercent").innerHTML = + bPercent +"%";
document.getElementById("cPercent").innerHTML = + cPercent +"%";
document.getElementById("fPercent").innerHTML = + fPercent +"%";
}