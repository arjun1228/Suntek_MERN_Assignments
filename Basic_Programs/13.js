// //function Decalaration
// function findSum(a,b)
// {
//     return a+b;
// }
// //Function Expression
// let findSum1 = function(a,b)
// {
//     return a+b;
// }
// //Arrow Function
// let findSum2 = (a,b) => a+b;
// //filer(Selection)
// marks = [90,87,55,88,66];
// let result1 = marks.filter(element => element > 70);
// console.log(result1);
// //map(modification)
// let result2 = marks.map(element => element + 10);   
// console.log(result2);
// //reduce(Aggregation)
// let small1 = marks.reduce((acc,element)=>acc<element?acc:element);
// console.log(small1);
// //find the smallest mark without reduce
// let small = marks[0];
// for(let v of marks) {
//     if (v < small) {
//         small = v;
//     }
// }
// console.log(small);
// //find 
// let result4 = marks.find(element=>element===88);
// console.log(result4);
//Task 1 (array of objects)
// let students = [
//     { sno:1,name:"arjun",age:29},
//     { sno:2,name:"ravi",age:25},
//     { sno:3,name:"sachin",age:30},
//     { sno:4,name:"rahul",age:24}
// ];
// //find students age less than 20
// let result1 = students.filter(studentObj => studentObj.age<30);
// console.log(result1);
// // add the age by 2 years for ravi
// let result2 = students.map(studentObj => {
//     if (studentObj.name ==="ravi")
//     {
//         studentObj.age += 2;
//     }
//     return studentObj;
// })
// console.log(result2)
// //find the sum og ages of all students
// let result3  =students.reduce((acc,element)=>acc+element.age,0);
// console.log(result3);
//Assignment 1
const temperatures = [32, 35, 28, 40, 38, 30, 42];
// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
let result1 = temperatures.filter(element => element > 35);
console.log(result1);
let result2 = temperatures.map(element => element * 1.8);
console.log(result2);
let result3 = temperatures.reduce((acc,element)=>(acc+element));
let result4 = result3 / temperatures.length;
console.log(result4);
let result5 = temperatures.find(temperature =>
{
    if (temperature > 40)
    {
        return temperature;
    }
})
let result6 = temperatures.findIndex(element => element == 28)
console.log(result6);