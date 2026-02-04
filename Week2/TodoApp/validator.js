export function validateTitle(title) {
// Your code here
// title should not be empty and must have atleast 3 letters
  if (title == "" || title.length < 3) {
    return false;
  }
  return true;
}


// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
// Your code here
if(priority == "low" || priority == "medium" || priority == "high")
{
    return true;
}
return false;
}


// 3. Validate due date (must be future date)
export function validateDueDate(date) {
    // Your code here 
    const today = new Date();          // current date
    const givenDate = new Date(date);  // user given date

  // due date should be future date
  if (givenDate > today) {
    return true;
  }
  return false;
}

