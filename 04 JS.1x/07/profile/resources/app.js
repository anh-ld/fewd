// data
let data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    looking_for: "female",
    location: "Hanoi"
  },
  {
    name: "Jane Do",
    age: 23,
    gender: "female",
    looking_for: "male",
    location: "Beijing"
  },
  {
    name: "Mark Kel",
    age: 34,
    gender: "male",
    looking_for: "female",
    location: "Shanghai"
  }
]

// iterator
function profileIterator(profiles) {
  let next = 0;
  return {
    next: function() {
      return next < profiles.length ?
      {value: profiles[next++], done: false} :
      {done: true}
    }
  }
}

// create an iterator
let profile = profileIterator(data);

// next profile
function nextProfile() {
  let currentProfile = profile.next().value;

  if (currentProfile !== undefined) {
    document.querySelector("#profileDisplay").innerHTML = `
    <ul>
      <li>Name: ${currentProfile.name}</li>
      <li>Age: ${currentProfile.age}</li>
      <li>Gender: ${currentProfile.gender}</li>
      <li>Location: ${currentProfile.location}</li>
      <li>Looking for: ${currentProfile.looking_for}</li>
    </ul>
    `
  } else {
    document.querySelector("#profileDisplay").innerHTML = `<h2>No more profile!!!</h2>`
  }
}

// handle click event
document.querySelector("#next").addEventListener("click", nextProfile);
