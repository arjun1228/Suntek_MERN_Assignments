//API
//JSON (JavaScript Object Notation)
let student = { // this is a simple object
    sno : 1,
    name : 'ravi',
    age : 19
}


//JS obj to JSON
let studentJson = JSON.stringify(student);
console.log(studentJson);
console.log(typeof studentJson)

//JSOn to JS obj
let dataObj = JSON.parse(studentJson);
console.log(dataObj)
console.log(typeof dataObj)