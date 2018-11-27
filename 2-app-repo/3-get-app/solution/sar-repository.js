const rp = require('minimal-request-promise'),
  SEARCH_APPS_PATH = 'https://eqhtwlzt79.execute-api.us-east-1.amazonaws.com/Prod/search?query=',
  AWS = require('aws-sdk'),
  sar = new AWS.ServerlessApplicationRepository({region:'us-east-1'});

module.exports = {
  getAppById: function getApp(appId) {
    return sar.getApplication({
      ApplicationId: appId
    }).promise()
    .catch(error => {
      console.log(error);
      error.message = `Sorry, an error occurred when getting your application.`;
      throw error;
    });
  },
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