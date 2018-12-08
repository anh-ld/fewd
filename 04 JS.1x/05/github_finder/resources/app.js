let user = document.querySelector("#user");
let github = new GitHub;
let ui = new UI;

user.addEventListener('keyup',(e) => {
  let username = e.target.value;
  if (username !== '') {
    github.getUser(username)
      .then(data => {
        if (data.profile.message == "Not Found") {
          ui.showAlert("User not found!!!");
        } else {
          ui.showProfile(data.profile);
          ui.showRepo(data.repo);
        }
      })
  } else {
    ui.clearProfile();
  }
});
