var me = {
  name: "Duy Anh",
  age: 20,
  edu: "Bachelor"
}
var meJSON = JSON.stringify(me); // convert object to JSON string
console.log(meJSON);

var me2 = JSON.parse(meJSON); // convert JSON string to object
console.log(me2);
