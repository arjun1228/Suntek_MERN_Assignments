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
let result1 =employees.filter(element => element.department == "IT");
console.log(result1);//printing the name of the employee in "IT" Dept


//Task2. Use map() to increment the salary by 10% bonus
let result2 = employees.map(element => element.salary + 1/10);
console.log(result2);//printing the salary after incremeting the bonus


//Task3. Use reduce() to calculate the totalSalary 
//reduce() it takes two parameters accumulator and element 
//accumulator always stores the previous result and initial value of the accumulator is 0
let result3 = employees.reduce((acc,element) => acc + element.salary,0);
console.log(result3);//printing the totalSalary


//Task4. Use find() to get the employee with the salary 30000 
let result4  = employees.find(element => element.salary == 30000);
console.log(result4);//printing the employee


//Task5. Use findIndex() to get the index of the employee name as "Neha"
//findIndex() it returns the index of the target, if the target is not present then it returns -1
let result5 = employees.findIndex(element => element.name == "Neha");
console.log(result5);


