// write a function that can extarct marks greater than 70, pack them into a aray and then retrun it
let marks = [90,87,55,88,66];
//using filter()
let result = marks.filter(element => element > 70);
console.log(result);4
//Normal way
// result = [];
// for (let i=0;i<marks.length;i++) {
//     if (marks[i] > 70)
//     {
//         result.push(marks[i]);
//     }
// }
// console.log(result);
// //find all marks between 30 and 90
// result1 = []
// for(let v of marks)
// {
//     if (v < 90 && v >30)
//     {
//         result1.push(v);
//     }
// }
// console.log(result1)
let salaries = [100,150,200];
result2 = [];
for(let v of salaries)
{
    result2.push(v+50);
}
console.log(result2);
let result3 = salaries.map(function(element) {
    return element+50;
})
console.log(result3);