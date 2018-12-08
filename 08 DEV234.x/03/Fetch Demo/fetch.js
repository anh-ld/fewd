const URL = "https://jsonplaceholder.typicode.com/todos/1";
const postURL = "https://jsonplaceholder.typicode.com/posts";

// get request
fetch(URL)
  .then((result) => {
    // console.log(result.status + " " + result.ok);
    return result.json();
  })
  .then((result) => {
    console.log("GET Request Response");
    console.log(result);
  })

// post request
let data = {
  name: "Duy Anh",
  age: 22
}

let initObject = {
  method: "POST",
  body: JSON.stringify(data),
  mode: "cors",
  headers: new Headers()
}

fetch(postURL, initObject)
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    console.log("POST Request Response");
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  })

// fetch using request object
let request = new Request(postURL,initObject);
fetch(request)
  .then(function(result) {  
    return result.json() 
  })
  .then(function(result) {
    console.log("POST Request /using Request Object/ Response");
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
  });