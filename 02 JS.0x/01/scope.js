var x = 1; // global var

function f1() {
  console.log(x);
}

function f2() {
  var y = 2, x = "New Var"; // local var
  console.log(x);
}

function f3(x) {
  // x will be a parameter
  console.log(x);
}

function f4() {
  if (true) {
    let x = "X created using let"; // only valid in the containing block
  }
  console.log(x);
}

f1();
f2();
f3(10);
f4();
