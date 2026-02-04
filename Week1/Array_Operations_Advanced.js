// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


//Task1. Use filter() to get only inStock products
let result1 = cart.filter(element => element.inStock == true);
console.log(result1); //Only the products which are in Stock


//Task2. Use map() to create a new array with: {name,totalPrice}
let result2 = cart.map(element => {
    return {
        name : element.name,
        totalPrice : element.totalPrice = element.price * element.quantity
}});
console.log(result2); //printing the new array with: {name,totalPrice}

//Task3. Use reduce to calculate the grand total of the cart
let result3 = cart.reduce((acc,element) => acc+ element.price * element.quantity,0);
console.log(result3); //printing the grand total value

//Task4. Use find() to get the  details of "Mouse"
let result4 = cart.find(element => element.name == "Mouse");
console.log(result4);

//Task5. Use findIndex() to get the position of the "Keyboard"
let result5 = cart.findIndex(element => element.name == "Keyboard");
console.log(result5);









// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"


//Task1. Use filter() to get the students who passed (marks >= 40) 
// Use object.value to get the marks of each student 
let result6a = students.filter(studentObj => studentObj.marks >=40);
console.log(result6a) //printing the students who passed the exam


//Task2. Use map() to a grade feild
 //        ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D,
let result7 = students.map(studentObj =>
{
    if (studentObj.marks >= 90){ studentObj.grade = 'A'}
    else if(studentObj.marks >=75 && studentObj.marks <=90) { studentObj.grade = 'B'}
    else if(studentObj.marks >=60 && studentObj.marks <=75) { studentObj.grade = 'C'}
    else { studentObj.grade = 'D'}
    return studentObj;
}
)
console.log(result7); //printing the students according to the marks


//Task3. Use reduce() to calculate the average marks 
//reduce() will take two parameters accumulator and element
//accumulator always stores the previous result and the intial value of accumulator is 0
let result8 = students.reduce((acc,element) => acc+element.marks,0);
let result9 = result8 / students.length;
console.log(result9);// printing the average marks of the students


//Task4. Use find() to get the student with the marks 92
let result10 = students.find(element => element.marks == 92);
console.log(result10);// printing the student who scored 92


// Task5. Use findIndex() to get the student name with "Kiran"
//It is used to return the index of the target, if the target is not present then it return -1
let result11 = students.findIndex(element => element.name == "Kiran");
console.log(result11);







// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


//Task1. Use filter() to get the name of the Employee in the "IT" department 
let result12 =employees.filter(element => element.department == "IT");
console.log(result12);//printing the name of the employee in "IT" Dept


//Task2. Use map() to increment the salary by 10% bonus
let result13 = employees.map(element => element.salary + 1/10);
console.log(result13);//printing the salary after incremeting the bonus


//Task3. Use reduce() to calculate the totalSalary 
//reduce() it takes two parameters accumulator and element 
//accumulator always stores the previous result and initial value of the accumulator is 0
let result14 = employees.reduce((acc,element) => acc + element.salary,0);
console.log(result14);//printing the totalSalary


//Task4. Use find() to get the employee with the salary 30000 
let result15 = employees.find(element => element.salary == 30000);
console.log(result15);//printing the employee


//Task5. Use findIndex() to get the index of the employee name as "Neha"
//findIndex() it returns the index of the target, if the target is not present then it returns -1
let result16 = employees.findIndex(element => element.name == "Neha");
console.log(result16);













// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"


//Task1. Use filter() to get only "Sci-Fi" movies
let result17 = movies.filter(element => element.genre == "Sci-Fi");
console.log(result17); 


//Task2. Use map() to return "Inception (8.8)"
//Find the element with the title "Inception" after concatenate with the title and its rating together.
let result18 = movies.map(element => 
    {
        if (element.title == "Inception")
        {
           console.log("" + element.title + "(" + element.rating + ")" );
        }
     });


//Task3. Use reduce() to find the average movie rating     
let result19 = movies.reduce((acc,element) => acc+element.rating,0);
let result20 = result19 / movies.length;
console.log(result20); //printing the average movie rating


//Task4. Use find() to get the element with the title "Joker"
let result21 = movies.find(element => element.title == "Joker");
console.log(result21); 


//Task5. Use findIndex() to get the index of the element with the title as "Avengers"
let result22 = movies.findIndex(element => element.title == "Avengers");
console.log(result22);











// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000



//Task1. Use filter() to get the element with the type as "credit"
let result23 = transactions.filter(element => element.type =="credit");
console.log(result23);


//Task2. Use map() to get the amount of each element
let result24 = transactions.map(element => element.amount);
console.log(result24);


//Task3. Use reduce() to get the final account balance
let result25 = transactions.reduce((acc,element) => acc+element.amount,0);
console.log(result25);


//Task4. Use find() to get the element with the type as "debit"
//find() always return the first element which satisfies the condition
let result26 = transactions.find(element => element.type == "debit");
console.log(result26);

