class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.display(repoData); //`repodata` is now a full JS object (thanks to the getRepoInfo method in githubApi. 2nd argument here is the callback function i.e. not executed until after we get the JS object - repoData). As a JS object, we can call .full_name to access its properties
      });

    });
  }

  display(data) {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    const imgEl = document.querySelector('#imgid');

    // console.log(repoNameEl.innerHTML = data.full_name);
    repoNameEl.innerHTML = data.full_name //repoNameEl is an h1 element so we don't call .innerText (which is used for div)
    repoDescriptionEl.innerHTML = data.description; //repoDescriptionEl is a p element so we don't call .innerText (which is used for div)
    imgEl.src = data.organization.avatar_url; 

    // document.getElementById("imgid").src = data.organization.avatar_url;
  
  }
}



  // repoNameEl.innerText = name;
    // repoDescriptionEl.innerText = description;
module.exports = GithubView;