//Variable definitions and statements
var num1, num2, num3, num4, num5, num6, num7, num8, questionnum1, questionnum2, questionnum3, questionnum4, questionnum5, questionnum6, questionnum7, questionnum8, question1, question2, question3, question4, question5, correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5;
num1 = Math.floor(3 * Math.random() + 6);
num2 = Math.ceil((Math.random() ** 2) + 2);
num3 = Math.round(6 * (Math.random() * (3 + num1)));
num4 = Math.floor((num2 * Math.random() + 2) * (num1 - 2 * num2));
num5 = Math.ceil((Math.random() ** 2) + 6);
num6 = Math.round((3 ** Math.random()) + 2);
num7 = Math.floor((Math.random() + 1) * num3 / 2);
num8 = Math.ceil(2 * (Math.random() ** 3));
var questionnum1 = num1.toString();
var questionnum2 = num2.toString();
var questionnum3 = num3.toString();
var questionnum4 = num4.toString();
var questionnum5 = num5.toString();
var questionnum6 = num6.toString();
var questionnum7 = num7.toString();
var questionnum8 = num8.toString();

//Math functions, question prompts, answers and user front end
var answer1 = prompt("(" + questionnum1 + " + " + questionnum2 + ")" + " * " + num4);
var correctAnswer1 = (num1 + num2) * num4;
document.write("Question: " + "(" + questionnum1 + " + " + questionnum2 + ")" + " * " + num4);
document.write("<br>You answered: " + answer1);
document.write("<br>The correct answer is: " + correctAnswer1);
document.write("<br>");

var answer2 = prompt("(" + questionnum8 + " * " + questionnum3 + ")" + " + " + "(" + num2 + " + " + num4 + ")");
document.write("<br>Question: " + "(" + questionnum8 + " * " + questionnum3 + ")" + " + " + "(" + num2 + " + " + num4 + ")");
var correctAnswer2 = (num8 * num3) + (num2 + num4);
document.write("<br>You answered: " + answer2);
document.write("<br>The correct answer is: " + correctAnswer2);
document.write("<br>");

var answer3 = prompt(questionnum5 + " * " + "(" + questionnum6 + " + " + "(" + questionnum7 + " * " + questionnum2 + ")" + ")");
document.write("<br>Question: " + questionnum5 + " * " + "(" + questionnum6 + " + " + "(" + questionnum7 + " * " + questionnum2 + ")" + ")");
var correctAnswer3 = num5 * (num6 + (num7 * num2));
document.write("<br>You answered: " + answer3);
document.write("<br>The correct answer is: " + correctAnswer3);
document.write("<br>");

var answer4 = prompt("4 * " + "(" + questionnum5 + " - " + questionnum6 + ")");
document.write("<br>Question: " + "4 * " + "(" + questionnum5 + " - " + questionnum6 + ")");
var correctAnswer4 = 4 * (num5 - num6);
document.write("<br>You answered: " + answer4);
document.write("<br>The correct answer is: " + correctAnswer4);
document.write("<br>");

var answer5 = prompt(questionnum3 + " * " + "4" + " + " + "3 - " + "(" + questionnum2 + "/" + questionnum8 + ")");
document.write("<br>Question: " + questionnum3 + " * " + "4" + " + " + "3 - " + "(" + questionnum2 + "/" + questionnum8 + ")");
var correctAnswer5 = num3 * 4 + 3 - (num2 / num8);
document.write("<br>You answered: " + answer5);
document.write("<br>The correct answer is: " + correctAnswer5);
document.write("<br>");