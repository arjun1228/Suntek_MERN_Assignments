let d1 = new Date(2022,0,1);
let d2 = new Date(2024,0,1);

//find difference
if(d1>d2)
{
    [d1,d2] = [d2,d1];
}

//find years
let years = d2.getFullYear() - d1.getFullYear();
console.log(years);

//find months
let months = d2.getMonth() - d1.getMonth();
console.log(months);

//find days
let days = d2.getDate() - d1.getDate();
console.log(days);
