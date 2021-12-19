function numLetters(){
  var letters = "abcefghijklmnopqrstuvwxyz";
  var i = 0;
  var total = 0;
  var sentence = document.getElementById("input").value;
  while (true) {
    if (letters.includes(sentence.charAt(i).toLowerCase())){
      total++;
    }
    i++
  }
  document.getElementById("output").innerHTML = "The number of letters in your sentence is: <span class='total'>" + total +'</span>'
}
numLetters()