function everyNumber(){
  var min = Number(document.getElementById("min0").value);
  var max = Number(document.getElementById("max0").value);
  for (i= min; i<= max; i++) {
    console.log(i)
  }
}

function evenNumber(){
  var min1 = Number(document.getElementById("min0").value);
  var max1 = Number(document.getElementById("max0").value);
  var evenNum = min1;
  for (evenNum = min1; evenNum <= max1; evenNum++){
    if(evenNum%2 == 0){
      console.log(evenNum);
    }
  }
}

function backwardsNumber(){
  var min2 = Number(document.getElementById("min0").value);
  var max2 = Number(document.getElementById("max0").value);
  for (x = max2; x >= min2; x--)
    console.log(x)
}