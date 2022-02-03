class GithubApi {
  getRepoInfo(repoName, callback) {
    fetch('https://api.github.com/repos/' + repoName) // Github API responds with the JSON format — a format commonly used in web APIs. See example of what it looks like below

      .then(response => response.json()) //convert JSON response to JS object
      .then(data => { 
        callback(data) //`data` is now a full JS object, so we can access its properties (i.e. call data.full_name in the githubView)  
      });
  }
}

module.exports = GithubApi;

//JSON format:
// {
//   "id": 106995,
//   "node_id": "MDEwOlJlcG9zaXRvcnkxMDY5OTU=",
//   "name": "sinatra",
//   "full_name": "sinatra/sinatra",
//   "private": false,
//   // (omitted for brevity)
// }