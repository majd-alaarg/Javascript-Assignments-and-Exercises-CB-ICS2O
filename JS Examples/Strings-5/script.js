function order(){
  var string1 = document.getElementById("word1").value;
  var string2 = document.getElementById("word2").value;
  var string3 = document.getElementById("word3").value;
  if ((string1 < string2)&&(string3 < string1)&&(string3 < string2)) {
    document.write("Sorted Strings: " +string3 +", " +string1 +", " +string2);
  } else if ((string1 < string2)&&(string1 < string3)&&(string3 < string2)) {
    document.write("Sorted Strings: " +string1 +", " +string3 +", " +string2);
  } else if ((string1 < string2)&&(string1 < string3)&&(string2 < string3)) {
    document.write("Sorted Strings: " +string1 +", " +string2 +", " +string3);
  } else if ((string2 < string1)&&(string3 < string2)&&(string3 < string1)) {
    document.write("Sorted Strings: " +string3 +", " +string2 +", " +string1);
  } else if ((string2 < string1)&&(string3 < string1)&&(string2 < string3)) {
    document.write("Sorted Strings: " +string2 +", " +string3 +", " +string1);
  } else {
    document.write("Sorted Strings: " +string2 +", " +string1 +", " +string3);
  }
}