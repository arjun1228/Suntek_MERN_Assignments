const marks = [78, 92, 35, 88, 40, 67];
// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92


//Task1. Use filter() to get the element with the marks strictly greater than 40
let result1 = marks.filter(element => element >= 40);
console.log(result1);//printing the pass marks


//Task2. Use map() to add the marks of each element with 5
let result2 = marks.map(element => element + 5);
console.log(result2);//printing the marks


//Task3. Use reduce() to find the highest mark 
//Accumulator stores the previous result and the initial value of Accumulator is 0
let result3 = marks.reduce((acc,element) => (element > acc)?element:acc,0);
console.log(result3); //printing the highest mark


//Task4. Use find() to get the element with the marks below 40
let result4 = marks.find(element => element < 40);
console.log(result4);


//Task5. Use findIndex() to get the index of the element with the marks of 92
let result5 = marks.findIndex(element => element == 92);
console.log(result5);