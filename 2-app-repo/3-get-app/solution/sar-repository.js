const AWS = require('aws-sdk'),
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
  listApps: () => {
    return sar.listApplications()
      .promise()
      .then(response => response.Applications)
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
};