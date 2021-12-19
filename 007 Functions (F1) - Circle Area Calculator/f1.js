//Circle area calculation
function calculateArea(circleRadius) {
	return (Math.PI * circleRadius ** 2).toFixed(3);
}

//myFunction begins here starts on click of "calculate" button
function myFunction() {

	//Retrieve input
	//circleRadius = document.getElementById("radiusInput").value;

	//Output area to div identified as "areaOutput"
	document.getElementById("areaOutput").innerHTML = "The area of your circle is: " + calculateArea(document.getElementById("radiusInput").value);
}
