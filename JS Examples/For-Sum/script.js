function toSum(){
  var sum = 0;
  var start = Number(document.getElementById("min0").value);
  var stop = Number(document.getElementById("max0").value);  
  var i = start
  for (i=start; i<=stop; i++) {
    sum = i + sum;
  }
console.log(sum);
}