let student = {
    rollNo: 1,
    name : "Appa"
}
console.log(student.rollNo);
console.log(student.name);
console.log(student.city);
console.log(student.city?.length??"property is not present");
//to avoid the error first we need to check the property by using the optional chaining (?)
// ? makes this property as optional chaining 
//?? represents the nullish caolescing  to print the reason for the error
