class GitHub {
  constructor() {
    this.client_id = "507d038bc825037fe46f";
    this.client_secret = "20025c69f0a1b42d45ed1825710b62351647b679";
    this.repo_count = 5;
    this.repo_sort = 'created: asc';
  }

  async getUser(user) {
    let profileRespone = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    let repoRespone = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.client_secret}/`);
    let profileData = await profileRespone.json();
    let reposData = await repoRespone.json();
    return {
      profile: profileData,
      repo: reposData
    }
  }
}
