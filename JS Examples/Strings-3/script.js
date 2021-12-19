function string3(){
  var original = document.getElementById("word1").value;
  var sub = document.getElementById("word2").value;
  var lengthword = original.length;
  if (original.includes(sub)) {
    var start = original.indexOf(sub);
    var end = start + sub.length-1;
    document.getElementById("output").innerHTML = "The substrig is in the word at position: " +start + "-" +end +"<br>The length of the string is: " + lengthword;
  } else {
    document.getElementById("output").innerHTML ="The substring is not in the word. " + "<br>The length of the string is: " + lengthword;
  }
}