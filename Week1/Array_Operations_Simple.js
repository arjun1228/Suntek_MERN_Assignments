// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.
// Test Data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];
// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28



//Task1. Use filter() to get the elements with the temperature above 35
let result1 = temperatures.filter(element => element > 35);
console.log(result1);


//Task2. Use map() to get all the temperatures in Fahrenheit
//map() creates new array with the temperature of type Fahrenheit 
//for coversion of temperature from  Celsius to Fahrenheit use the formula (temperature * 1.8) + 32
let result2 = temperatures.map(element => (element * 1.8) + 32);
console.log(result2); //printing the temperature in Fahrenheit


//Task3. Use reduce() to find the average of all temperatures
let result3 = temperatures.reduce((acc,element)=>(acc+element),0);
let result4 = result3 / temperatures.length;
console.log(result4); //printing the average


//Task4. Use find() to get the temperature above 40
let result5 = temperatures.find(temperature => temperature > 40);
console.log(result5)


//Task5. Use findIndex() to get the index of the element with the temperature of 28
let result6 = temperatures.findIndex(element => element == 28)
console.log(result6);


// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];
// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"


//Task1. Use filter() to get the length of the element greater then 5
//Here length is a built-in property of JS  
let result7 = courses.filter(element => element.length > 5)
console.log(result7);


//Task2. Use map() to get all the elements in uppercase
//Here toUppercase() is a built-in method in JS
let result8 = courses.map(element => element.toUpperCase());
console.log(result8);


//Task3. Use reduce() to get all elements into a single string
//first convert the element into uppercase and then add it to the final string and the initial value of the accumlator is empty string
let result9 = courses.reduce((acc,element) =>acc+element.toUpperCase(),"")
console.log(result9);//printing the combined string


//Task4. Use find() to get the element with "react"
let result10 =courses.find(element => element == "react");
console.log(result10);


//Task5. Use findIndex() to get the index of the element with "node"
let result11 = courses.findIndex(element => element == "node");
console.log(result11);


// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];
// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92


//Task1. Use filter() to get the element with the marks strictly greater than 40
let result12 = marks.filter(element => element >= 40);
console.log(result12);//printing the pass marks


//Task2. Use map() to add the marks of each element with 5
let result13 = marks.map(element => element + 5);
console.log(result13);//printing the marks


//Task3. Use reduce() to find the highest mark 
//Accumulator stores the previous result and the initial value of Accumulator is 0
let result14 = marks.reduce((acc,element) => (element > acc)?element:acc,0);
console.log(result14); //printing the highest mark


//Task4. Use find() to get the element with the marks below 40
let result15 = marks.find(element => element < 40);
console.log(result15);


//Task5. Use findIndex() to get the index of the element with the marks of 92
let result16 = marks.findIndex(element => element == 92);
console.log(result16);