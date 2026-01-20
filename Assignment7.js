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
let result1 = courses.filter(element => element.length > 5)
console.log(result1);


//Task2. Use map() to get all the elements in uppercase
//Here toUppercase() is a built-in method in JS
let result2 = courses.map(element => element.toUpperCase());
console.log(result2);


//Task3. Use reduce() to get all elements into a single string
//first convert the element into uppercase and then add it to the final string and the initial value of the accumlator is empty string
let result3 = courses.reduce((acc,element) =>acc+element.toUpperCase(),"")
console.log(result3);//printing the combined string


//Task4. Use find() to get the element with "react"
let result4 =courses.find(element => element == "react");
console.log(result4);


//Task5. Use findIndex() to get the index of the element with "node"
let result5 = courses.findIndex(element => element == "node");
console.log(result5);

