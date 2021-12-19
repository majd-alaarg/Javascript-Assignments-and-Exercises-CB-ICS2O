function wordTransformer(){
  var text = document.getElementById("input").value;
  var a = text.toUpperCase()
  if (a.startsWith("A") || a.startsWith("E") || a.startsWith("I") || a.startsWith("O")||a.startsWith("U") ){  
    var charbegin = text.charAt(0);
    var y = text.substr(1);
    y += charbegin;
  } else {
    var y = text + "ly"
  }
  document.getElementById("input").value = y;
}