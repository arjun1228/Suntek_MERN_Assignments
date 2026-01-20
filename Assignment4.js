const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"


//Task1. Use filter() to get only "Sci-Fi" movies
let result1 = movies.filter(element => element.genre == "Sci-Fi");
console.log(result1); 


//Task2. Use map() to return "Inception (8.8)"
//Find the element with the title "Inception" after concatenate with the title and its rating together.
let result2 = movies.map(element => 
    {
        if (element.title == "Inception")
        {
           console.log("" + element.title + "(" + element.rating + ")" );
        }
     });


//Task3. Use reduce() to find the average movie rating     
let result3 = movies.reduce((acc,element) => acc+element.rating,0);
let result4 = result3 / movies.length;
console.log(result4); //printing the average movie rating


//Task4. Use find() to get the element with the title "Joker"
let result5 = movies.find(element => element.title == "Joker");
console.log(result5); 


//Task5. Use findIndex() to get the index of the element with the title as "Avengers"
let result6 = movies.findIndex(element => element.title == "Avengers");
console.log(result6);


