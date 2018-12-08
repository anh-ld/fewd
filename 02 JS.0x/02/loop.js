// for loop
var daysOfWeek =  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
for (var i = 0, out = ""; i < daysOfWeek.length; i++) {
  out += daysOfWeek[i] + " ";
}
console.log(out);

// do while, the same with while
var out = "", i = 0;
do {
  out += i + " ";
  i++;
} while (i < 10);
console.log(out);

// for-in
// Don't use for-in unless you use it with safeguards or are at least aware of why it might bite you.
var nba = {
  country: "USA",
  yearOfBirth: 1950,
  players: 2000,
  teams: 30
}

for (var property in nba) {
  console.log(property + ": " + nba[property]);
}

//for each
daysOfWeek.forEach(function(i) {
  console.log(i);
});
