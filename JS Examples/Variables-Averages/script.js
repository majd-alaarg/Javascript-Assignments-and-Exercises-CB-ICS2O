var grade1, grade2, grade3, grade4,averageGrade;
grade1 = prompt("To calculate your average please enter your first grade:");
grade2 = prompt("To calculate your average please enter your second grade:");
grade3 = prompt("To calculate your average please enter your third grade:");
grade4 = prompt("To calculate your average please enter your foruth grade:");
var grade1 = Number(grade1)
var grade2 = Number(grade2)
var grade3 = Number(grade3)
var grade4 = Number(grade4)
averageGrade = (grade1+grade2+grade3+grade4)/4
document.write("Your average grade is " +averageGrade);