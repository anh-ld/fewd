class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
    this.alert = document.querySelector("#alert");
    this.repo = document.querySelector("#repos");
  }

  showProfile(user) {
    this.alert.style.display = "none";
    this.profile.innerHTML = `
    <div class="row">
      <div class="column column-40">
        <span>Username</span>
        <span>Name</span>
        <span>Location</span>
        <span>Company</span>
        <span>Public Repos</span>
        <span>Public Gists</span>
        <span>Followers</span>
        <span>Following</span>
        <span>Created at</span>
        <span>Updated at</span>
      </div>
      <div class="column column-60">
        <span><a href="${user.html_url}" target="_blank">${user.login}</a></span>
        <span>${user.name}</span>
        <span>${user.location}</span>
        <span>${user.company}</span>
        <span>${user.public_repos}</span>
        <span>${user.public_gists}</span>
        <span>${user.followers}</span>
        <span>${user.following}</span>
        <span>${user.created_at}</span>
        <span>${user.updated_at}</span>
      </div>
    </div>
    `
  }

  clearProfile() {
    this.profile.innerHTML = "";
    this.alert.style.display = "none";
    this.repo.innerHTML = "";
  }

  showAlert(message) {
    this.alert.innerHTML = `${message}`;
    this.alert.style.display = "block";
  }

  showRepo(repo) {
    this.repo.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Repo</th>
          <th>Stars</th>
          <th>Watchers</th>
          <th>Forks</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    `
    repo.forEach((item) => {
      document.querySelector("tbody").innerHTML += `
      <tr>
        <td><a href="${item.html_url}" target="_blank">${item.name}</td>
        <td>${item.stargazers_count}</td>
        <td>${item.watchers}</td>
        <td>${item.forms_count}</td>
      </tr>
      `
    });
  }
}
