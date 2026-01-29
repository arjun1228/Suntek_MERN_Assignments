// //3 members ordered food
// //person1 ordered biryani(5Sec)
// console.log("person1 ordered biryani"); //non-block sync
// setTimeout(() => { // block async
//     console.log("person1 received the biryani")
// },5000)

 
// //person2 ordered curd rice(2Sec)
// console.log("person2 ordered curd rice") //non-block sync
// setTimeout(() => { //block sync
//     console.log("person2 received the curd rice");
// },2000)


// //person3 ordered water bottle(1Sec)
// console.log("person3 orderd the water bottle"); //non-block async
// setTimeout(() => { //block sync
//     console.log("person3 received the water bottle");
// },1000)


// let d1 = new Date();
// setInterval(() => {
//     console.log(d1.toString())
// },5000);


//Ravi made a promise to kiran that he will call him after 10 min
let futureVaialability = true;
//create promise(Kiran)
let promiseObj = new Promise((fulfill,rejection) => {  //if it is (a,b) a represents the fulfilled state and the second parameter represents the rejection
    setTimeout(() => {
        if(futureVaialability === true) {
            fulfill("hello frnd how are you")
        } else {
            rejection("Sorry");
        }
    },5000)
})
console.log(promiseObj)


// //consume promise(Ravi)
promiseObj
.then((message) => console.log("Fulfill Method:",message))
.catch((error) => console.log("Rejected Method:",rejection))

console.log("yoooo")

//modern way to consume promise(async & wait)

