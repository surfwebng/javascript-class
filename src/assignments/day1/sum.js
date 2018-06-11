
/*Question
1. write a float statement that test the data type of the following variable

var myString ="Craft Turf";
var myNumber = 12;
var Number= 4>5;


2. Log a message to the console for every test.

3. write a function that accepts as argument the log message  and the data type.
Then within the body of the function write to the console, the message an the data type.

4. write a unit test for the tasks above
===============================================================================
*/
//Answers==========

var myString ="Craft Turf";
console.log(typeof myString);
myString; 

var myNumber =12;
console.log(typeof myNumber);
myNumber;

var myNumbers = 4>5;
console.log(typeof myNumbers);
myNumbers;

function sum(num1,num2){
    return num1 + num2;
    console.log(typeof sum);
}
sum(20,20);
