const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000


//Task1. Use filter() to get the element with the type as "credit"
let result1 = transactions.filter(element => element.type =="credit");
console.log(result1);


//Task2. Use map() to get the amount of each element
let result2 = transactions.map(element => element.amount);
console.log(result2);


//Task3. Use reduce() to get the final account balance
let result3 = transactions.reduce((acc,element) => acc+element.amount,0);
console.log(result3);


//Task4. Use find() to get the element with the type as "debit"
//find() always return the first element which satisfies the condition
let result4 = transactions.find(element => element.type == "debit");
console.log(result4);


//Task5. Use findIndex() to get the index of the transaction with the amount of 10000
let result5 = transactions.findIndex(element => element.amount == 10000);
console.log(result5);