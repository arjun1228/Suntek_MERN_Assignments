//Array Operations
let skills = ['html','css','js'];
//Accessing the elements(destruncturing)
let [skill1,skill2,skill3] = skills;
//Inserting
//at start
skills.unshift('angular');
console.log(skills);
//at end
skills.push('os');
console.log(skills);
//in between
//splice(index,delete count,elements)
skills.splice(1,0,'python');
console.log(skills);
//Deletion
//at start
skills.shift()
console.log(skills);
//at end
skills.pop()
console.log(skills);
//in between
skills.splice(1,1);
console.log(skills);

