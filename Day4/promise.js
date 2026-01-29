let future = true;
 
console.log("Promise1")
//create promise(Arjun)
let promiseObj = new Promise((fulfill,rejection) => {
    setTimeout(() => {
        if(future === true) {
            fulfill("Completed Success")
        } else {
            rejection("Sorry see you later")
        }
    }, 5000);
})

//consume promise
promiseObj
.then((message) => console.log("Fulfill methos:" ,message))
.catch((error) => console.log("rejection method:",error))

console.log("byeee")