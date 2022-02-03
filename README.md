## Practising using the github API, callbacks, promises, fetch

Week 7 of Makers bootcamp

```npm run build ```
to load the web page. When this is running, the bundle.js file automatically updates when you make changes in the source files (which are required by the index.js file, the main file)

### Fetch Diagram

GithubApi class uses `fetch` to request data from Github's API. We pass getRepoInfo function a callback function as the 2nd argument so that it will not be called until after fetch is fulfilled (after the promise is fulfilled?) The function fetch and the JSON format can also be used to send HTTP request data to the remote server (for example, POST requests).

![Fetch diagram](./images/fetch-diagram.png)