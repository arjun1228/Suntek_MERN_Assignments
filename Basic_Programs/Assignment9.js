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
