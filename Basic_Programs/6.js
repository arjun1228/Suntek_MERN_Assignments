//Array (ordered collection)
let marks=[90,87,89,67,56];
// let skills=['html','css','js']; 
// console.log(marks);
// console.log(skills);
//for-f loop
// for(let v of marks)
// {
//     sum += v;  
// }
// console.log(sum)
//write a funstion that receives marks array as argument and returns smallest element
// function smallestElement(marks)
// {
//     let small = marks[0];
//     for(let v in marks)
//     {
//         if(marks[v] < small)
//         {
//             small = marks[v];
//         }
//     }
//     return small;
// }
// let result = smallestElement(marks);
// console.log(result);
let skills=['react','angular','node.js','java'];
function findSkill(skills,skillName)
{
    for(let v=0;v<skills.length;v++)
    {
        if (skills[v]==skillName)
        {
            return v;
        }
    }
    return "skill not found";
}
let result=findSkill(skills,"java");
console.log(result);