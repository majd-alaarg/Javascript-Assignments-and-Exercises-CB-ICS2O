var question1, question2, question3, question4, question5, a, b, c, d, e, f, answer1, answer2, answer3, answer4, answer5;
var a = Number(a);
var b = Number(b);
var c = Number(c);
var d = Number(d);
var e = Number(e);
var f = Number(f);
var a = Math.floor(100*Math.random()+20);
var b = Math.floor(275*Math.random()+2);
var c = Math.floor(172*Math.random()-55);
var d = Math.floor(760*Math.random()-10);
var e = Math.floor(6871*Math.random()-5);
var f = Math.floor(295*Math.random()-200);
alert("Solve the following questions with the given variables a=" +a +" " +"b=" +b +" "+"c=" +c +" "+"d=" +d +" "+"e=" +e +" " )
question1 = "a*3+22-(a*33)";
correct1 = a*3+22-(a*33);
question2 = "b*4-c*7+d*8";
correct2 = b*4-c*7+d*8
question3 = "4*(5-b)**a";
correct3 = 4*(5-b)**a
question4 = "6*(7**a)**b";
correct4 = 6*(7**a)**b
question5 = "e*33 + f + a*66 + b*99";
correct5 = e*33 + f + a*66 + b*99
answer1 = prompt("Answer the following: " +question1);
answer2 = prompt("Answer the following: " +question2);
answer3 = prompt("Answer the following: " +question3);
answer4 = prompt("Answer the following: " +question4);
answer5 = prompt("Answer the following: " +question5);

document.write ("Question 1: " +question1 +" " +"<br>Your answer: " +answer1 +" " +"<br>Correct answer:" +" " +correct1);
document.write ("<br> ");

document.write ("<br>Question 2: " +question2 +" " +"<br>Your answer: " +answer2 +" " +"<br>Correct answer:" +" " +correct2);
document.write ("<br> ");

document.write ("<br>Question 3: " +question3 +" " +"<br>Your answer: " +answer3 +" " +"<br>Correct answer:" +" " +correct3);
document.write ("<br> ");

document.write ("<br>Question 4: " +question4 +" " +"<br>Your answer: " +answer4 +" " +"<br>Correct answer:" +" " +correct4);
document.write ("<br> ");

document.write ("<br>Question 5: " +question5 +" " +"<br>Your answer: " +answer5 +" " +"<br>Correct answer:" +" " +correct5);