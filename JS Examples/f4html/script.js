function Operation() {
    var operation = document.getElementById("userInput").value;
    var width = document.getElementById("inputWidth").value;
    var height = document.getElementById("inputHeight").value;
    console.log(height);
    if (operation == "Area") {
        document.getElementById("outputText").innerHTML = "The <span id='bold'>area</span> of your rectangle is: <span id='bold'>" + (width*height) + "</span>";
    } else if (operation == "Perimeter") {
        document.getElementById("outputText").innerHTML = "The <span id='bold'>perimeter</span> of your rectangle is: <span id='bold'>" + (width*2 + height*2) + "</span>";
    } else {
        document.getElementById("outputText").innerHTML = "The <span id='bold'>diagonal</span> of your rectangle is approximately: <span id='bold'>" + (Math.floor(Math.sqrt(width**2 + height**2))) + "</span>";
    }
}