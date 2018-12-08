// standard promise
let promise = new Promise((resolve, reject) => {
  let isSuccessful = Math.random() > 0.5; // random result
  if (isSuccessful) {
    resolve("Success!");
  } else {
    // reject(Error("Failure!"));
    reject("Failed!");
  }
})

promise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

// resolved promise
let promise2 = Promise.resolve([1,2,3,4]);
let promise3 = Promise.resolve({name: "Duy Anh", age: 20});

// chaining promises
promise2
  .then((result) => {
    console.log("Result: " + result);
    return result.map((x) => {
      return x * x;
    });
  })
  .then((result2) => {
    console.log("Result2: " + result2);
    return result2.filter((x) => {
      return x > 10;
    });
  })
  .then((result3) => {
    console.log("Result3: " + result3);
    return result3.toString() + "!";
  })
  .then((result4) => {
    console.log("Result4: " + result4);
  })
  .catch((e) => {
    console.log(e);
  });

// promise all
Promise.all([promise2, promise3]) // takes in an array of promises and then wait for them to resolve
  .then((result) => {
    console.log("Promise All: " + result);
  })
  .catch((e) => {
    console.log(e);
  })

// promise race
Promise.race([promise2, promise3]) // takes in an array of promises and then takes the fastest result
  .then((result) => {
    console.log("Promise Race: " + result);
  })
  .catch((e) => {
    console.log(e);
  })