function whereIsMyMoney() {
  // create new Promise, Promise is now pending
  return new Promise(function(resolve, reject) {
    let isHappy = Math.round(Math.random());

    // if it's ok, return resolve
    if (isHappy) {
      let moneyBack = 2000;
      return resolve(moneyBack);
    }
    // if it isn't ok, return reject
    if (!isHappy) {
      let reason = "Bankrupted";
      return reject(reason);
    }
  });
}

whereIsMyMoney()
  .then(function(money) {
    console.log("I got back " + money);
  })
  .then(function() {
    console.log("Let's party boys!!!");
  })
  .catch(function(reason) {
    console.log("He/She was " + reason);
  })

// then and catch only receive function
