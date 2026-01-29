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



// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged

//Task1. Use structuredClone() for creating the deep copy of an object
let orderDeep = structuredClone(order);
console.log(orderDeep)

//Task2. 
orderDeep.customer.address.city = "Mumbai";

orderDeep.items[0].price = 80000;

console.log("Original Object",order);
console.log("Copied Object",orderDeep)



