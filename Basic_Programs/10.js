//callback function  - a function send as arg to the another function 
function test1(a)
{
    console.log(a());
}
//here, ananymous function is a callback function 
test1(function()
{
    return 123;
})
//functions are called by the application here it is 10.js
