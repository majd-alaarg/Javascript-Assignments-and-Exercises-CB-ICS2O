function mathQuestion(){
  var operation = Math.floor(4*Math.random()+1);
  const FIRST = Math.floor(50*Math.random()+1);
  const SECOND = Math.floor(50*Math.random()+1);
  if (operation == 1) {
    var answer = prompt("What is " +String(first) + " "+"x" + " " + String(second)+"?");
    if (answer == (first*second)) {
      document.getElementById("outputText").innerHTML = '<span id="correctAnswer"> Good work that is the correct answer!</span><br>'+ String(first) +" "+"x"+" "+String(second) + "= " +(first*second);
    } else {
      document.getElementById("outputText").innerHTML = '<span id="wrongAnswer"> Good try but that answer is incorrect! :( </span><br>' + String(first) +" "+"x"+" " + String(second) + "= " +(first*second);
    }
  }
  else if (operation == 2) {
    var answer = prompt("What is " +String(first) + " " + "+" +" " + String(second)+ "?");
    if (answer == (first+second)){
      document.getElementById("outputText").innerHTML = '<span id="correctAnswer"> Good work that is the correct answer!</span><br>'+ String(first) +" "+"+"+" "+String(second) + "= " +(first+second);
    } else {
      document.getElementById("outputText").innerHTML = '<span id="wrongAnswer"> Good try but that answer is incorrect! :( </span><br>' + String(first) +" "+"+"+" " + String(second) + "= " +(first+second);
    }
  }
  else if (operation == 3) {
    var answer = prompt("What is " +String(first) + " " +"-" +" " + String(second)+ "?");
    if (answer == (first-second)){
      document.getElementById("outputText").innerHTML = '<span id="correctAnswer"> Good work that is the correct answer!</span><br>'+ String(first) +" "+"-"+" "+String(second) + "= " +(first-second);
    } else {
      document.getElementById("outputText").innerHTML = '<span id="wrongAnswer"> Good try but that answer is incorrect! :( </span><br>' + String(first) +" "+"-"+" " + String(second) + "= " +(first-second);
    }
  }
   else {
       var answer = prompt("What is " + String(first) + " " + "÷" + " " + String(second) + "?"); 
       if (answer == (first/second)) {
         document.getElementById("outputText").innerHTML = '<span id="correctAnswer"> Good work that is the correct answer!</span><br>' + 
         String(first) + " " + "÷" + " " + String(second) + "= " + (first/second);
       }
       else {
         document.getElementById("outputText").innerHTML = '<span id="wrongAnswer">Good try but that answer is incorrect! :(</span><br>' + 
         String(first) + " " + "÷" + " " + String(second) + "= " + (first/second);
       }
    }
}