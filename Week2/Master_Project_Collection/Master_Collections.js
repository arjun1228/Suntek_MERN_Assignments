// Project story:
// -------------
// “We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

// const { use } = require("react");

// Data setup:
// -----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];


// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably


// //Use filter() to get the active users
// let result1 = users.filter(element => element.active);
// console.log(result1);//printing the active users

// //use the above result to get the active users information from that use map() to get the names of active users
// let result2 = result1.map(element => element.name);
// console.log(result2); // printing the names

// //use filter() to get the users with the role of admin
// let result3 = users.filter(element => element.role ="admin");
// console.log(result3);

// //create a id to find the user and use find() to get the user details 
// //if the userid is present in the users then it returns the users if not undefined
// let userid = 2;
// let result4 = users.find(element => element.id == userid);
// console.log(result4);

// //create a id to find the user and use find() to deactivate the element as false 
// let useridd = 1;
// let result5 = users.find(element => element.id == useridd ? {...element,active:false}: element.active);
// console.log(result5);




const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably


// //Use filter() to get the published courses
// let result1 = courses.filter(element => element.published);
// console.log(result1);

// //Use the sort() to get prices from (high to low)
// let result2 = courses.sort((a,b) => b.price - a.price);
// console.log(result2);

// //Use map() for creating an array with the object {title,price}
// let resutl3 = courses.map(element => ({title: element.title, price: element.price}) );
// console.log(resutl3);

// //Use filter() for finding the published courses after that use reduce() to find the total value of the published courses
// //the inital value of the acc is 0 and it always stores the previous result
// let result4 = courses.filter(element => element.published).reduce((acc,element) => acc+element.price,0);
// console.log(result4)

// //create a new course with the same properties and use the spread operator with the created course 
// let newCourse = {id:104,title:"Express",price:1599,published:true};
// let result5 = [...courses,newCourse];
// console.log(result5) //printing the courses





const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

// //Use map() for creating a new array to get fullInfo of course along with qty
// //Use find() to get the mateched object and then return the course along with the qty
// let result1 = cart.map(element1 => {
//   let courseInfo = courses.find(element => element.id == element1.courseId)
//   return{
//     ...courseInfo,qty:element1.qty
//   }
// })
// console.log(result1)


// // //Use reduce() to calculate the total cart value 
// // //Use the previous result to get the all courses with the qty to find the total cart value.
// let result2 = result1.reduce((acc,element) => acc+element.price * element.qty ,0);
// console.log(result2)


// // //Use map() to increase the qty of the course 
// // //Create a new id to increase the qty of the course immutably
// let Idd = 103
// let result3 = result1.map((element) => element.id == Idd ? {...element,qty:element.qty +1} : element);
// console.log(result3);


// let courseRemove = 103;
// let result4 = result1.filter(element => element.id != courseRemove);
// console.log(result4);


// //Use filter() to check if all the courses are paid or not
// let result5 = result1.filter(element => element.price > 0);
// console.log(result5);








const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

//Use Object.keys() to get the all the role names
let result1 = Object.keys(roles);
console.log(result1);


//Use 
let result2 = roles.student.includes("Delete");
console.log(result2);


let result3 = [...new Set(Object.values(roles).flat())]
console.log(result3);


//Create a new role for adding into the roles immutably 
//Use spread operator with the old roles and newly created role
let newRole = { moderator : ["delete","view"]};
let result4 = {
  ...roles,
  ...newRole
}
console.log(result4);