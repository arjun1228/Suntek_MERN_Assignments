//# is used to make the property of a class as private access modifier
//when we want to create 

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

class Book {
    constructor(title,author,pages,isAvailable)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }
    borrow(){
       this.isAvailable = false;
       console.log("Book is not Available");

    }
    returBook(){
        this.isAvailable = true;
        console.log("Book is Available");
    }
    getInfo(){
        console.log(this.title  +" by "+  this.author  +  " ( "  +  this.pages  +  " ) " );
    }
    isLongBook(){
        if (this.pages>300){
            return true
        }
        else {
            return false
        }

    }
}
const r1 = new Book("JS","Arjun","300",true);
const r2 = new Book("HTML","Harsha","299",false);
const r3 = new Book("CSS","Paul","400",true);
const r4 = new Book("OS","Rocky","120",true);
const r5 = new Book("CN","Nandu","500",false);

//create an array of objects for easy accesssing
const library1 = [r1,r2,r3,r4,r5]

//   2. Perform the following operations:


//       i. Display info of all books
r1.getInfo();
r2.getInfo();
r3.getInfo();
r4.getInfo();
r5.getInfo();

//    ii. Borrow 2 books and show their availability status
r1.borrow()
r2.borrow()

//  iii. Return 1 book and show updated status
r1.returBook();

//       iv. Count how many books are "long books" (more than 300 pages)
let longBooks = library1.filter(element => element.isLongBook());
console.log(longBooks);

//       v. List all available books
// This creates a new array containing only books where isAvailable is true
let availableBooks = library1.filter(book => book.isAvailable === true);
console.log("Available Books:", availableBooks);






