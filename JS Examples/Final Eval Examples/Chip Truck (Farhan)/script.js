var food = [];
var size = Number(prompt("How many items were sold?")); //Maximum Array size
count = 0
var pprice = 0
var fprice = 0
var sprice = 0
var exact1 = 0
var exact2 = 0


	//Taking Input from user

function popup() {


for(var i=0; i<size; i++) 
{
	food[i] = prompt('Enter item sold ' + (i+1));
  
  
if (food[i] == 'F' || food[i] == 'P'|| food[i] == 'S') {
    
} 
else {
  alert("Invalid");
   location.reload();
return false;
}
}
document.getElementById("disp1").innerHTML = "The products entered were " + food + "!";


 //Counting Countainers

 // getOccurance is just a easier way to count indiviual strings I found while looking through the w3school link you provided in 008
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}
    document.getElementById("disp2").innerHTML = "The total number of containers was " + ((getOccurrence(food, "P")) + (getOccurrence(food, "F"))) + "!";


// Total Price (Not including bonus money!)

pprice = (getOccurrence(food, "P"))*7;
fprice = (getOccurrence(food, "F"))*5;
sprice = (getOccurrence(food, "S"))*1.5;
document.getElementById("disp3").innerHTML = "Sales made were " +  (pprice + fprice + sprice) + " dollars!";


//end of function popup
}


function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

// Verification 
function check1(popup) {
  var obtTotal = Number(prompt("What was your total profit?"));
  if (obtTotal != (pprice + fprice + sprice)) 
  {
    alert("Oh oh, something is not right...");
  }
  else 
  {
    alert("You were bang-on!");
    exact1 = 1;
  }
}

function check2(){


  var cUsed = Number(prompt("How many containers were used?"))
  if (cUsed == ((getOccurrence(food, "P")) + (getOccurrence(food, "F"))) + 1 ) 
  {
    alert("You were 1 off!");
  }
  else if (cUsed == ((getOccurrence(food, "P")) + (getOccurrence(food, "F"))) + 2 )
  {
    alert("You were 2 off!");
  }
  else if (cUsed == ((getOccurrence(food, "P")) + (getOccurrence(food, "F"))) ) 
  {
    alert("You were exact!");
    exact2 = 1
  }

  else {
     alert("Oh oh! You were pretty off...");
  }
}

// bonus pay checker

function bonus (check1, check2) {
 if ((exact1 + exact2) == 2) {
  alert("You shall recieve a bonus!")
  location.reload();
return false;
}
 else {
   alert("You shall not recieve a bonus!")
   location.reload();
return false;
 }
}

