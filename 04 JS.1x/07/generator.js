// init a generator
function* name() {
  yield "Howdy";
  yield "Jill";
}

function* id() {
  let index = 5;
  while (true) {
    yield index++;
  }
}

// call a generator
let say = name();
console.log(say.next());
console.log(say.next());
console.log(say.next());

let count = id();
console.log(count.next());
console.log(count.next());
console.log(count.next());
