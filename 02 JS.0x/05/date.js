var d = new Date();
console.log(d); // return the current time

var d1 = new Date(1e12); // milliseconds since 1970
console.log(d1);

var d2 = new Date(2010, 9, 26); // month: 0 - 11, day: 1 - 31
console.log(d2);

// convert to string
console.log(d.toString());
console.log(d.getDate());
console.log(d.getDay()); // day: 0 - 6 (counting from Sun)
