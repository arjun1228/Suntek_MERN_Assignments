//Mutable(all refrence types are mutable)


// Immutable(all primitives are immutable)
// let  a =10;
// a = a + 10;
// a = a * 10;
// console.log("a is ",a);

let test  = {
    a:10,
    b:20,
    c:30
}
// Unpack object (destructuring)
// when we are unpacking an object the variables should match with the property names of the object
let {a,b,c} = test; // let {a,b,c} = {a:10,b:20,c:30};
console.log(a);
console.log(b);
console.log(c);
let marks = [839,9];
// complex Object
let student = {
    sno:100,
    name:"Arjun",
    marks:[90,89,99],
    address:{
        city:"hyderabed",
        pincode:88083
    },
    getData:function() {
        //object processing business logic
        // console.log(this.marks[0]);
        let avg = 0;
        for (let v of this.marks)
        {
            avg += v;
        }
        avg = avg / this.marks.length;
        return avg;
    }
}
console.log(student.marks);
console.log(student.address.city);
console.log(student.getData());
