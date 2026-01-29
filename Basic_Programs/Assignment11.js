const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields

//Task1. print the user name and mail
console.log(user.name);
console.log(user.email);

//Task2. add a new property lastLogin as "2026-01-01"
this.lastLogin = "2026-01-01";
console.log(this.lastLogin);

//Task3. Update role from "student" to "Admin"
this.role = "admin";
console.log(this.role);

//Task4. Delete the isActive property
delete user.isActive;
console.log(user);

//Task5. Use object.keys() to get the keys
let a = Object.keys(user);
console.log(a);
