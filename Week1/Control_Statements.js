//  HANDS-ON 1: Smart Login Status Engine
// ----------------------------------------
// Initial Date:
let isLoggedIn = true;
let isProfileComplete = false;


//Task4. Store the result in message
let message;
//Task1. If user is not logged in → show "Please login"
if (!isLoggedIn) {
    message = "Please login";
} 
//Task2. If logged in but profile incomplete → show "Complete your profile"
else if (!isProfileComplete) {
    message = "Complete your profile";
} 
//Task3. If logged in and profile complete → show "Welcome back!"
else {
    message = "Welcome back!";
}
//Task5. Print the message
console.log(message);




// HANDS-ON 2: Course Price Tag Labeler
// ------------------------------------
// Initial data:
let price = 1299;


//Task4. Store label in courseTag
let courseTag;
//Task1. If price < 500 → "Budget Course"
if (price < 500) {
    courseTag = "Budget Course";
} 
//Task2. If price between 500–1000 → "Standard Course"
else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
}
//Task3. If price > 1000 → "Premium Course"
 else {
    courseTag = "Premium Course";
}
//Task5. Print the label
console.log(courseTag);




// HANDS-ON 3: Enrollment Eligibility Checker
// ------------------------------------------
// Initial data:
let hasPaid = true;
let hasCompletedBasics = false;


let enrollMessage
//    1. If both conditions are true → "Enroll Now"
//    2. Otherwise → "Complete Requirements"
//    3. Use ternary operator
//    4. Store result in enrollMessage
(hasPaid&&hasCompletedBasics)?enrollMessage="Enroll Now":enrollMessage="Complete Requirements"
console.log(enrollMessage)
//    5. Print message

