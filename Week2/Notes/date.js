//Date() is the predefing class in JS
// create date
let d1 = new Date();
console.log(d1.toString())
let d2 = new Date('2026-1-21');
//Date is stored in ISO format
//YYYY-MM-DD -> HH:mm:ss -> .sss(Milliseconds) Z(UTC time zone) 
//IST = 5:30 + UST
console.log(d2);
let d3 = new Date(2026,0,21);
console.log(d3.toString());
let d4 = new Date(Date.now());// Date.now() is used to give the timestamps of the current date 
console.log(d4);
//In JS objects stores time as UTC timestamp 
let d5 = new Date(2022,0) // if we supply the day as nothing the it gives default day is 1st day of the month
let d6 = new Date(2022,0,0) //if supply the day as 0 then it gives last day of previous month
//getter's
//getFullYear()
//getMonth()
//getDate()
//getDay()
//getHours()
//getMinutes()
//getSeconds()
//getMilliseconds()
//setter's
//setFullYesr(year)
//setMonth(month)
//setDate(dayOfMonth)
//setHours(hours)
//setMinutes(minutes)
//setMilliseconds(ms)

