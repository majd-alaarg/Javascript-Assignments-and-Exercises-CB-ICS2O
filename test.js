/*
var x = prompt("enter number")
if ((x <= 13) || (x >= 5)){
  alert("true")
} else{
  alert("false")
}
*/

/*
var x, y, z;
x = 10;
y = 20;
z = 10;
while (x < y) {
  z = z + x;
}
alert(z);
*/

/*
var sentence = "Colonel By";
var word = "";
for (x = 1; x<sentence.length; x=x+2)
{
  word += sentence.charAt(x);
}
alert(word);
*/

/*
num = 550
if (num < 200) {
  num = num * 2;
}
else if (num > 700) {
  if (num > 200) {
    num = num * 3;
  }
}
alert(num)
*/

/*
var president ="Barack Obama";
var term = 5;
document.write("president");
document.write("term");
document.write(president + term);
*/

/*
var x = 14;
var y = 3;
document.write("x + y" + " is " + x+y);
*/

/*
var x = 1;
while (x > 4) {   
    alert( x);  
    x =x + 1;
}
*/

/*
var msg = 5;
for (x = 1; x<=4; x++) {
    msg = msg +  x;
    alert(msg);
}
*/

/*
for (x = 0; x >= 10; x = x - 5) {
  alert(x);
}
*/

/*
for (x = 1; x < 5; x++) {
  x = x + 1;
  alert(x);
}
*/

/*
var word = "Harry Potter World";
alert(word.substring(6));
*/

/*
var x, y, z;
x = 3;
y = 10;
z = 8;
while (x < y) {
  z = z + y;
  x = x + 2;
}
alert(z);
*/

/*
var x, y, z;
x = 1;
y = 10;
z = 5;
while (x < y) {
  z = z + y;
  x = x + 2;
}
alert(x);
*/

/*
var x, y, z;
x = 10;
y = 10;
z = 10;
while (x < y) {
  z = z + y;
  x = x - 5;
}
alert(x);
*/

/*
var x, y;
x = 0;
y = 2;

while (x < 10) {
  x = x + y;
  alert(x);
}
*/

/*
intnumber = 1;
while (intnumber < 0) {
  intnumber = intnumber - 1;
  alert(intnumber)
}
*/

/*
var s = "There was a cat that wore a hat";
var w1 = "cat";
var w2 = "turtle";

console.log(s.substring(5, 11))
console.log(s.replace(w1,w2))
console.log(w2.charAt(7))
console.log(w1.charAt(2) + w2.substring(1))
console.log(s.includes(w2))
console.log(w1.toUpperCase())
console.log(s.endsWith("at") == w1.endsWith("at"));
console.log(s.indexOf(w1))
*/

/*
var x = 8;
var y = 4;
console.log((x > 0) || (x < 8))
console.log((x > 0) && (x<8))
console.log(	(y==4) && (x<y))
console.log(	(x!=8) || (y==4))
console.log((x!=8) && (y!=4))
console.log((x > 0) && (y<12))
*/


/*
var x = 14;
var y = 4;
console.log((x < 0) || (x<14))
console.log((x > 0) && (x<14))
console.log((y==4) && (y<x))
console.log((x!=14) || (y!=4))
*/

var x = 8;
var word = "mamba";
var sentence = "a dog came"
console.log(x != 8)
console.log(8 >= x)
console.log(x = 8)
console.log(x <= 8)
console.log(x => 4)
console.log(word.charAt(0))
//console.log(sentence.instr("a"))
console.log(sentence.startsWith("a"))
