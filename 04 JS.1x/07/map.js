// maps: key - value pair
let map1 = new Map();

let key1 = "name";
let key2 = "age";
let key3 = "gender";

// set map value
map1.set(key1, "Duy Anh");
map1.set(key2, 20);
map1.set(key3, "Male");

// get map value
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// get map size
console.log(map1.size);
// get map keys
console.log(map1.keys());

// convert to Array
let keyValArray = Array.from(map1);
console.log(keyValArray);

// convert to array of values
let valArray = Array.from(map1.values());
console.log(valArray);

// convert to array of keys
let keyArray = Array.from(map1.keys());
console.log(keyArray);
