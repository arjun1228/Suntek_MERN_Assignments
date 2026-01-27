// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t


//Task1. Create a shallow copty of user
//Use spread operator foe the shallow copy
let userCopy = {...user};

//Task2. 
userCopy.name = "Arjun";

userCopy.preferences.theme = "light";

console.log("Original User",user);
console.log("Copied User",userCopy);

//After changing the name and preferences theme there is no change in the inner object in the copied object
//But these is a change in the outer property of the copied object



