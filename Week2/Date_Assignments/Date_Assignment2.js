// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

let enrollmentDeadline = new Date("2026-01-20");
let todayDate = new Date();

//Task1.
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"
if(todayDate < enrollmentDeadline){
    console.log("Enrollmenr Open");
}
else {
    console.log("Enrollment Closed");
}

//Task2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
let input1 = new Date("2026-02-30");


