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