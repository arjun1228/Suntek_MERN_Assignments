const temperatures = [32, 35, 28, 40, 38, 30, 42];
// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28



//Task1. Use filter() to get the elements with the temperature above 35
let result1 = temperatures.filter(element => element > 35);
console.log(result1);


//Task2. Use map() to get all the temperatures in Fahrenheit
//map() creates new array with the temperature of type Fahrenheit 
//for coversion of temperature from  Celsius to Fahrenheit use the formula (temperature * 1.8) + 32
let result2 = temperatures.map(element => (element * 1.8) + 32);
console.log(result2); //printing the temperature in Fahrenheit


//Task3. Use reduce() to find the average of all temperatures
let result3 = temperatures.reduce((acc,element)=>(acc+element),0);
let result4 = result3 / temperatures.length;
console.log(result4); //printing the average


//Task4. Use find() to get the temperature above 40
let result5 = temperatures.find(temperature => temperature > 40);
console.log(result5)


//Task5. Use findIndex() to get the index of the element with the temperature of 28
let result6 = temperatures.findIndex(element => element == 28)
console.log(result6);