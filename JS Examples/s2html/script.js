var question = prompt("What is your question?"), question = Math.floor(8*Math.random()+1);
var msg;
if (question == 1) {
  msg = "It is certain";
} else if (question == 2) {
  msg = "Most likely";
} else if (question == 3) {
  msg = "Reply hazy, try again"; 
} else if (question == 4) {
  msg = "Outlook not so good";
} else if (question == 5) {
  msg = "Without a doubt";
} else if (question == 6) {
  msg = "Outlook good";
} else if (question == 7) {
  msg = "Ask again later";
} else {
  msg = "Very doubtful";
}
document.write(" "+msg);