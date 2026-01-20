  const cart = [
  { id: 101, product: "Laptop", price: 50000, qty: 1 },
  { id: 102, product: "Mouse", price: 500, qty: 2 }
];

// Operations:
//  1. Calculate total cart value

//  2. Increase quantity of Mouse to 3 (immutably)

//  3. Remove Laptop from cart

//  4. Extract only { product, totalPrice } per item

//  5. Check if all items cost more than ₹300

let result1 = cart.reduce((acc,element) => acc+ element.price * element.qty,0);
console.log(result1);
let result2 = cart.map(element => element.product == "Mouse" ? {...element, qty: element.qty + 1} : element);
console.log(result2);
let result3 = cart.filter(element => element.product != "Laptop");
console.log(result3);
for (let v in cart)
{
    cart[v].totalPrice = cart[v].price * cart[v].qty;
}
console.log(cart);
let result4 = cart.map(element => ({ product : element.product , totalPrice: element.totalPrice}));
console.log(result4);
let result5 = cart.every(element => element.totalPrice > 300);
console.log(result5);