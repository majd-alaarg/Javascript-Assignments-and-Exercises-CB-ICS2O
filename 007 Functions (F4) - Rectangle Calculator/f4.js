var length, width, height;

//Get Values
function getValues() {
	length = Number(document.getElementById("userLength").value);
	width = Number(document.getElementById("userWidth").value);
	height = Number(document.getElementById("userHeight").value);
}
//Area function
function rectangleArea() {
	//Calculate
	getValues();
	var area = length * width;
	//Output
	document.getElementById("areaOutput").innerHTML = area;
}

//Perimeter function
function rectanglePerimeter() {
	getValues();
	//Calculate
	var perimeter = 2 * (length + width);
	//Output
	document.getElementById("perimeterOutput").innerHTML = perimeter;
}

//Diagonal function
function rectangleDiagonal() {
	getValues();
	//Calculate
	var diagonal = (Math.sqrt(width ** 2 + length ** 2)).toFixed(3);
	//Output
	document.getElementById("diagonalOutput").innerHTML = diagonal;
}

//Volume function
function rectangleVolume() {
	getValues();
	//Calculate
	var volume = length * width * height;
	//Output
	document.getElementById("volumeOutput").innerHTML = volume;
}
