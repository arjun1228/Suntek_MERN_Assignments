import { cloneElement } from "react";

let data = 100
//create copy
let datacopy = data;

//check
data =200
console.log(data);
console.log(datacopy);

let obj = {
    a:10,
    b:20
}
//create copy x
//let objCopy = obj; this is wrong
//when an object do not contain nested object we can use spread operator
let copyObj = {...obj};
console.log(obj);
console.log(copyObj);
//when we want to create copy for the nested objects then we need to use the structuredClone() 

let student1 = {
    collegeName: "Anurag",
    collegeAddress :
    {
        street: "miyapur",
        pincode: 9789
    }
}
let student2 = {...student1}
console.log(student2.collegeName);


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
let userCopy = {...user};
//     2. Change:
//           i. name in the copied object
userCopy.name ="Arjun"
//           ii. preferences.theme in the copied object
userCopy.preferences.theme = "light"
//           iii .Log both original and copied objects
console.log(user,userCopy)
//           iv. Observe what changes and what doesn’t






