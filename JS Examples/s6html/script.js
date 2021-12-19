function Quiz() {
    numofQuestions = document.getElementById("userAmount").value;
    amountCorrect = 0
    var random1, random2, operation, userAnswer;
for (var i = 0; i < numofQuestions; i++) {
         random1 = Math.floor(Math.random()*15) + 1;
         random2 = Math.floor(Math.random()*15) + 1;
         operation = Math.floor(Math.random()*2) + 1;
        if (operation == 1) {
             userAnswer = Number(prompt("What is " + random1 + ' + ' + random2 + "?"));
            if (userAnswer == (random1 + random2)) {
                amountCorrect = amountCorrect + 1;
                alert("Right Answer! " + random1 + "+" + random2 + "=" + (random1+random2));
            } else {
                alert("Wrong Answer! The right answer is " + random1 + "+" + random2 + "=" + (random1+random2));
            }
        } else {
             userAnswer = Number(prompt("What is " + random1 + ' - ' + random2 + "?"));
           if (userAnswer == (random1 - random2)) {
                amountCorrect = amountCorrect + 1;
                alert("Right Answer! " + random1 + "-" + random2 + "=" + (random1-random2));
          } else {
                alert("Wrong Answer! The right answer is " + random1 + "-" + random2 + "=" + (random1-random2));
            }
        }
    }
document.getElementById("message").innerHTML = "You got " + amountCorrect + "/" + numofQuestions + ". That's " + Math.floor((amountCorrect/numofQuestions)*100) + "%."
}    