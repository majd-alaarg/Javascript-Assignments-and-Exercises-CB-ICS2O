function areaCircle(radius) {
  return (Math.PI * radius * radius);
}
function calculate(){
  var radius = document.getElementById("userInput"). value;
  document.getElementById("outputText").innerHTML = "The area of your circle is approximately: <span id='space'>" + areaCircle(radius) + " units². </span>";
}