function Leap(){
  var year = document.getElementById("userInput").value;
  if ( ((year%100 != 0) && (year%4 == 0)) || ((year%4 == 0) && (year%400 == 0)) ) {
    document.getElementById("message").innerHTML = "The year entered is a <b>leap year<b>!";
  } else {
    document.getElementById("message").innerHTML = "The year entered is not a <b>leap year<b>!";
  }
}