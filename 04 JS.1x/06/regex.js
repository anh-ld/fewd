let re, result;
re = /hello/i; // i means case insensitive, g - global search

// console.log(re);
// console.log(re.source);

// exec - return result in an array or null
result = re.exec('vietnam hello world');
console.log(result);

// test - return true or false
result = re.test('Helloo');
console.log(result);

// match - return result in an array or null
let str = 'Hell There';
result = str.match(re);
console.log(result);

// search - return index of the first match or -1 (if not found)
str = 'Waooo Hello';
result = str.search(re);
console.log(result);

// replace
str = 'Waooo Hello';
let newStr = str.replace(re, 'Hi');
console.log(newStr);
