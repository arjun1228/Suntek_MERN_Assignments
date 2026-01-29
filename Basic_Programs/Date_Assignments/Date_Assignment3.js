// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
    let dob = "2005-12-28";


// Tasks:
//         1. Calculate exact age in years

let birthdate = new Date(dob);
let today = new Date();
let parts = dob.split("-");
let dob_yr = parseInt(parts[0]);
let date2 = new Date();
let cur_Year = date2.getFullYear();
let age = cur_Year - dob_yr;
let dob_mon = parseInt(parts[1]);
let cur_mon = parseInt(date2.getMonth());
let dob_day = parseInt(parts[2]);
let cur_day = parseInt(date2.getDay());
if(cur_mon < dob_mon || (cur_mon == dob_mon && cur_day < dob_day)){
    age--;
}
console.log("Age: "+ age);