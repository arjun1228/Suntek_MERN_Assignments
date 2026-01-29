let price = 1299;
//Task4. Store label in courseTag
let courseTag;
//Task1. If price < 500 → "Budget Course"
if (price < 500) {
    courseTag = "Budget Course";
} 
//Task2. If price between 500–1000 → "Standard Course"
else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
}
//Task3. If price > 1000 → "Premium Course"
 else {
    courseTag = "Premium Course";
}
//Task5. Print the label
console.log(courseTag);




// HANDS-ON 3: Enrollment Eligibility Checker
// ------------------------------------------
// Initial data: