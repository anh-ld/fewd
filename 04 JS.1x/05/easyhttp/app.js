let http = new easyHTTP();
let data = {
  title: "Custom User",
  name: "Meo Meo",
  age: 20
}

// http.get('https://jsonplaceholder.typicode.com/users', function(res) {
//   console.log(res);
// });

// http.post('https://jsonplaceholder.typicode.com/users', data, function(res) {
//   console.log(res);
// })

// http.put("https://jsonplaceholder.typicode.com/users/1", data, function(res) {
//   console.log(res);
// })

http.delete("https://jsonplaceholder.typicode.com/users/1", function(res) {
  console.log(res);
})
