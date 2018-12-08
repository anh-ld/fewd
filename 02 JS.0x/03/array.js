let myArray = ['red', 'blue', 'yellow', 'grey', 'purple', 'pink'];

console.log(typeof(myArray)); //object
console.log("Length: " + myArray.length); //length

myArray.push('orange'); // add new item to the end of an array
console.log(myArray);
myArray.pop(); // remove last item
console.log(myArray);
myArray.splice(0, 2); //remove 2 items from index 0
console.log(myArray);

var subArray = myArray.slice(0, 2); // copy array items from index 0 to 2-1
console.log(subArray);

myArray.sort();// sort alphabetically
console.log(myArray);

let persons = [
  {name: "DuyAnh", age: 20},
  {name: "Andy", age: 50},
  {name: "Stephen", age: 55},
];

console.log(persons[0]);
console.log(persons[2].age);

function compareTwoNumbers(a, b) {
  if (a < b) return -1;
  if (a == b) return 0;
  return 1;
}

let numbers = [4, 6, 8, 2, 1, 20, 16];
numbers.sort(compareTwoNumbers); // sort numerically callback func
console.log(numbers);

// forEach
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
days.forEach(function(day, index) {
  console.log(index + " " + day);
})
