// an object = a table whose keys/indexes are defined
let jsCourse = {
  courseName: "Js Intro",
  weeks: 5,
  madeBy: "W3Cx",
  author: "Michel"
};

// array is also an object
let dateArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let darkVador = {
    job: 'villain',
    race: 'half human half machine'
};

// access object's properties
console.log(darkVador.job + " " + darkVador.race);
console.log(darkVador['job'] + " " + darkVador['race']);

// add new property
darkVador.year = 1945;
darkVador['place'] = "New York";
darkVador['date of publication'] = 'April 6th 1945'; // can't use . notation
console.log(darkVador);

// classic case
let key = "name";
let book = {}; // initialize type object of variable "book"
book[key] = "The Alchemist";
console.log(book);

// nested object
let stadium = {
  name: "Alianz Area",
  city: "Munich",
  info: {
    capacity: 75000,
    team: "Bayern",
    height: 52
  }
};
console.log(stadium.info.team);
console.log(stadium);

// function as a property
stadium.sound = function() {
  console.log("Goal Goal Goal!!!");
}
stadium.sound();
// this
stadium.describe = function() {
  console.log(this.name + " in " + this.city);
}
stadium.describe();

// delete property
delete stadium.city;
console.log(stadium);
