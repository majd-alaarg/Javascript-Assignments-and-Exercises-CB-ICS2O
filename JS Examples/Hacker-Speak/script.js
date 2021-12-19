function convertSentence(){
  var sentence = document.getElementById("sentence").value;
  var i = 0;
  var output = " ";
  while(true) {
    if(i == sentence.length) {
      break;
    } else if (sentence.charAt(i).toLowerCase() == "a") {
      output = output + "4";
    } else if (sentence.charAt(i).toLowerCase() == "e") {
      output = output + "3";
    } else if (sentence.charAt(i).toLowerCase() == "i") {
      output = output + "1";
    } else if (sentence.charAt(i).toLowerCase() == "o") {
      output = output + "0";
    } else {
      output = output + sentence.charAt(i);
    }
    i++;
  }
  document.getElementById("output").innerHTML = "Your sentence in Hacker Speak is: <span class='bold'>" + output + "</span>"; 
}