// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

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



// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.
// Marks are stored subject-wise for a student
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90


//Task1. Calculate Total Marks
let total = 0;

// Loop through each subject and add marks
for (let subject in marks) {
  total += marks[subject];
}
console.log(total);

//Task2. Calculate Average Marks
// Count number of subjects
let numberOfSubjects = Object.keys(marks).length;
let average = total / numberOfSubjects;
console.log("Average Marks:", average);
//Task3. Find the Highest Scoring Subject
let highestSubject = "";
let highestMarks = 0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}

console.log(highestSubject);
console.log(highestMarks);
//Task4. Add a New Subject computer: 90
marks.computer = 90;
console.log(marks);


// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

// Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


// Tasks :
//     1.Toggle theme between "light" and "dark"
//     2. Turn autoSave to true
//     3. Remove the notifications setting
//     4. Freeze the settings object so it cannot be modified



//Task1. Toggle theme between "light" and "dark"
// If theme is light → change to dark
// If theme is dark → change to light
settings.theme = (settings.theme === "light") ? "dark" : "light";
console.log(settings.theme);

//Task2. Turn autoSave to true
settings.autoSave = true;
console.log(settings.autoSave);

//Task3. Remove the notifications setting
delete settings.notifications;
console.log(settings);

//Task4.Freeze the settings object so it cannot be modified
Object.freeze(settings);
console.log(settings);








