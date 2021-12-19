var test1 = new Array(4);
  for (i=0; i<test1.length; i++){
    test1[i]=prompt("Enter student's test 1 grade in here:");
    console.log(test1[i]);
  }
alert(test1[2]);
//
var sum = 0;
for (i=0; i<test1.length; i++){
  sum += test1[i];
}  
console.log(sum/test1.length);