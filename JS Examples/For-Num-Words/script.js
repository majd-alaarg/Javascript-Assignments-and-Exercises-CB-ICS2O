function numWords(){
  var x = 0;
  var sentence = document.getElementById("text").value;
  var amountWords = sentence.split(" ");
  for (i=0; i <= amountWords.length; i++){
    x++;
  }
  x = x-1;
  alert("The number of words in your sentence is " +x);
}