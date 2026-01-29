//Make API req
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then((data) => console.log("data is ",data))
// .catch((error) => console.log("err is ",error))

//modern syntax to consume promise
async function getData() {
    //make api req and get Res
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //extract data from res using the .json()
    let  data = await res.json();
    console.log("data is",data)
}

getData();