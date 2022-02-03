class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.display(repoData);
      });

    });
  }

  display(data) {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    const imgEl = document.querySelector('#imgid');

    console.log(repoNameEl.innerHTML = data.full_name);
    repoNameEl.innerHTML = data.full_name
    repoDescriptionEl.innerHTML = data.description;
    imgEl.src = data.organization.avatar_url; 

    // document.getElementById("imgid").src = data.organization.avatar_url;
  
  }
}



  // repoNameEl.innerText = name;
    // repoDescriptionEl.innerText = description;
module.exports = GithubView;