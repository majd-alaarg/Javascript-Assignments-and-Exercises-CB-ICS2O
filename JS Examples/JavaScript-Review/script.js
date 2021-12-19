Arrays Practice
  var test1 = new Array(4);
    for (i=0; i<test1.length; i++){
    test1[i]=prompt("Enter student's test 1 grade in here:");
    console.log(test1[i]);
    }
  alert(test1[2]);
  var sum = 0;
  for (i=0; i<test1.length; i++){
    sum += test1[i];
  }  
  console.log(sum/test1.length);

Array Exercises: Knowledge Review
  1. In situations when dealing with ALL the elements of the array (ie, filling or printing an entire array), a for loop should be used.

  2. Suppose an array sample has been created according to the declaration: var sample = new Array(MAXSIZE); //MAXSIZE is a constant
  Write a code fragment to perform the following:
    a) Assign the value 28 to the 3rd element.
      sample[2] = 28;
    b) Store the sum of the values of the 2nd and 3rd element at the location of the 10th element.
      sample[9] = sample[1] + sample[2];
    c) Copy the value of the 1st element into the 8th element.
      sample[7] = sample[0];
    d) Initialize all elements to 0 
      var sample = new Array(10);
      for (i=0; i<sample.length; i++){
        sample[i] = 0;
      }
    e) Swap the values in the 1st and 2nd elements (Hint: use a third variable temp) */
      var sample = new Array(2);
      sample[0]=prompt("Enter a value for the first element");
      sample[1]=prompt("Enter a value for the second element");
      const TEMP = sample[0];
      sample[0] = sample[1];
      sample[1]= TEMP;
      console.log(sample);

3. Write a code fragment to perform the following:
    a) Define an array that will hold a class list of marks. Assume there are 27 people in the class.
      var classMarks = new Array(27);
    b) Define a second array that will hold a student number.
      var studentNumber = new Array(27);
    c) Fill each element of the marks array with a mark of 90.
      var classMarks = new Array(27);
      for (i = 0; i < classMarks.length; i++) {
        classMarks[i] = 90;
      }
    d) Fill each element of the student number array with a random 3-digit number.
      var studentNumber = new Array(27)
      for (i=0; i < studentNumber.length; i++) {
        studentNumber[i] = Math.floor(901*Math.random()+100);
      }