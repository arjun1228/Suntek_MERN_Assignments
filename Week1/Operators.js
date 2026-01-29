function amount(a)
{
    a = 0;
//Task1. Add ₹500 to the total
    a += 500;
//Task2. Add ₹1200 to the total
    a += 1200;
//Task3. Apply a ₹200 discount
    a -= 200;
//Task4. Add 18% GST
    a += 18/100;
    return a;
}
//Task5. Print the final bill amount
let result = amount();
console.log(result);