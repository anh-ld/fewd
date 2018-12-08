// string, number, boolean, undefined, null, object

// dynamic typing or loose typed
var x = 10;
console.log(typeof(x));

var famousActor = "Andy Lau";
console.log(typeof(famousActor));

var z;
console.log(typeof(z)); // variable declared but doesn't have a initial value

// null vs undefined: null == undefined but null !== undefined
// typeof(null) is object while typeof(undefined) is undefined

var person = {
  name: "Jackey",
  nationality: "Hongkong",
  age: 60,
}
console.log(person);
console.log(person.name + " is from " + person.nationality + ". He is " + person.age + ".");

var arrayOfDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // array is an object
console.log(typeof(arrayOfDays));
