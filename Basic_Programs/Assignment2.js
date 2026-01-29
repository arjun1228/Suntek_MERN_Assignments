const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D,  
// reduce() to calculate average marks
// find() the student who scored 92,
// findIndex() of student "Kiran"

//Task1. Use filter() to get the students who passed (marks >= 40) 
// Use object.value to get the marks of each student 
let result1 = students.filter(studentObj => studentObj.marks >=40);
console.log(result1) //printing the students who passed the exam


//Task2. Use map() to a grade feild
 //        ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D,
let result2 = students.map(studentObj =>
{
    if (studentObj.marks >= 90){ studentObj.grade = 'A'}
    else if(studentObj.marks >=75 && studentObj.marks <=90) { studentObj.grade = 'B'}
    else if(studentObj.marks >=60 && studentObj.marks <=75) { studentObj.grade = 'C'}
    else { studentObj.grade = 'D'}
    return studentObj;
}
)
console.log(result2); //printing the students according to the marks


//Task3. Use reduce() to calculate the average marks 
//reduce() will take two parameters accumulator and element
//accumulator always stores the previous result and the intial value of accumulator is 0
let result3 = students.reduce((acc,element) => acc+element.marks,0);
let result4 = result3 / students.length;
console.log(result4);// printing the average marks of the students


//Task4. Use find() to get the student with the marks 92
let result5 = students.find(element => element.marks == 92);
console.log(result5);// printing the student who scored 92


// Task5. Use findIndex() to get the student name with "Kiran"
//It is used to return the index of the target, if the target is not present then it return -1
let result6 = students.findIndex(element => element.name == "Kiran");
console.log(result6);