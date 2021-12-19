function getSubstring(){
  var word = document.getElementById("box1").value;
  var start = document.getElementById("box2").value;
  var part = word.substring(start);
  alert(part);
}
function getIndexOf(){
  var sentence = document.getElementById("box1").value;
  var word = document.getElementById("box2").value;
  var found = sentence.indexOf(word);
  if (found>0){
  alert("Found at: " +found);
  } else {
    alert("Not Found");
  }
}
function getReplacement() {
  var word = document.getElementById("box1").value;
  var replacement = document.getElementById("box2").value;
  var result = word.replace("o", replacement);
  alert(result);
}
function getlastIndexOf() {
  var sentence = document.getElementById("box1").value;
  var word = document.getElementById("box2").value;
  var found = sentence.lastIndexOf(word);
  if (found>0) {
    alert ("Found at: " +found);
  } else {
    alert ("Not Found");
  }
}
function upperCase() {
  var original = document.getElementById("box1").value;
  var nowUpper = original.toUpperCase();
  alert(nowUpper);
}
function getLength() {
  var text = document.getElementById("box1").value;
  var length = text.length;
  alert(length);
}
function getIncludes() {
  var str = document.getElementById("box1").value;
  var n = str.includes(document.getElementById("box2").value);
  if (n == true) {
    alert(true);
  } else {
    alert(false);
  }
}
function getStartsWith() {
  var str = document.getElementById("box1").value;
  var n = str.startsWith(document.getElementById("box2").value);
  if (n == true) {
    alert(true);
  } else {
    alert(false);
  }
}
function findCharAt() {
  var string = document.getElementById("box1").value;
  var n = string.charAt(document.getElementById("box2").value);
  alert(n);
}
function findCharCodeAt() {
  var word = document.getElementById("box1").value;
  var result = word.charCodeAt(document.getElementById("box2").value);
  alert(result);
}
function findCodeCharAt() {
  var result = String.fromCharCode(document.getElementById("box1").value);
  alert(result);
}
function getStringComparisons() {
  var word = document.getElementById("box1").value;
  var word2 = document.getElementById("box2").value;
  var p = false;
  if (word == word2) {
    alert(true);
  } else {
    alert(false);
  }
}