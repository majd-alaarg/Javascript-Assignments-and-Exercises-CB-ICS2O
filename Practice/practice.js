//Rectangle calculator
alert("Welcome to rectangle calculator");
var length = Number(prompt("Enter a length"));
var width = Number(prompt("Enter a width"));
var area = length * width;
var perimeter = 2 * (length + width);
alert("The area is: " + area + "\nThe perimeter is: " + perimeter);


//Average calculator
alert("Average Claculator");

gradeSum = 0;
for (i = 0; i < 4; i++) {
	grade = Number(prompt("Enter a grade"));
	gradeSum += grade;
}
alert("The average is: " + gradeSum/4)