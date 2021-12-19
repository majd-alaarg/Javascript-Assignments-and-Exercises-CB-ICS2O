var numbers = new Array(10); 
var sum = 0;
var avg = 0;
var max = 0;
  for (i=0; i < numbers.length; i++){
    numbers[i] = Math.floor(101*Math.random()+1);
    sum = sum + numbers[i];
    document.write("The numbers in the array are: " +numbers[i] +"<br>");
    max = Math.max(numbers[0],numbers[1], numbers[2], numbers[3], numbers[4], numbers[5], numbers[6], numbers[7], numbers[8], numbers[9]);
  }
avg = sum/numbers.length;
document.write("<br> The average between the array of numbers are: " + avg);
document.write("<br> The maximum value in the array is: " +max);