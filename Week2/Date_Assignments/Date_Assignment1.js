// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss


//Task1. Create a Date Object 
let d1 = new Date();

//Task2. Display 
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds
//store all the months in an array to get human readable month
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//store all the days in an array to get the day of week
let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
let year = d1.getFullYear();
// use the d1.getMonth() as index to get the month easily
let month = months[d1.getMonth()]
let date = d1.getDate();
//use the d1.getDay() as index to get the day easily 
let Day = days[d1.getDay()];
let Hours = d1.getHours();
let Minutes = d1.getMinutes();
let Seconds = d1.getSeconds();

console.log(year);
console.log(month);
console.log(date);
console.log(Day);
console.log(Hours);
console.log(Minutes);
console.log(Seconds);

//Task3. Date in the format DD-MM-YYYY HH:mm:ss
let formattedDate = String(date) + "-" + String(d1.getMonth() + 1) + "-" + String(year) + " "  + String(Hours) + ":" + String(Minutes) + ":" + String(Seconds);
console.log(formattedDate)



