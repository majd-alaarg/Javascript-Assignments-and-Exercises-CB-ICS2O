var width, length, perimeterRectangle, areaRectangle;
width = prompt("Welcome to Rectangle Calculator, to calculate the area and perimeter of your rectangle enter in your width:");
length = prompt("Welcome to Rectangle Calculator, to calculate the area and perimeter of your rectangle enter in your length:");
areaRectangle = length*width;
perimeterRectangle = (length*2) + (width*2)
document.write ("The area of your rectangle is " +areaRectangle )
document.write ("<br>The perimeter of your rectangle is " +perimeterRectangle )