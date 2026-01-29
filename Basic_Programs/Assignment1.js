const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


//Task1. Use filter() to get only inStock products
let result1 = cart.filter(element => element.inStock == true);
console.log(result1); //Only the products which are in Stock


//Task2. Use map() to create a new array with: {name,totalPrice}
let result2 = cart.map(element => {
    return {
        name : element.name,
        totalPrice : element.totalPrice = element.price * element.quantity
}});
console.log(result2); //printing the new array with: {name,totalPrice}

//Task3. Use reduce to calculate the grand total of the cart
let result3 = cart.reduce((acc,element) => acc+ element.price * element.quantity,0);
console.log(result3); //printing the grand total value

//Task4. Use find() to get the  details of "Mouse"
let result4 = cart.find(element => element.name == "Mouse");
console.log(result4);

//Task5. Use findIndex() to get the position of the "Keyboard"
let result5 = cart.findIndex(element => element.name == "Keyboard");
console.log(result5);
