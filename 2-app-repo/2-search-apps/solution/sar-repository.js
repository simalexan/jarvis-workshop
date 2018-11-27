const rp = require('minimal-request-promise'),
  SEARCH_APPS_PATH = 'https://eqhtwlzt79.execute-api.us-east-1.amazonaws.com/Prod/search?query=';

module.exports = {
  searchApps: (searchTerm) => {
    return rp.get(SEARCH_APPS_PATH+searchTerm)
      .then(response => JSON.parse(response.body))
      .then(body => body.Applications)
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
};