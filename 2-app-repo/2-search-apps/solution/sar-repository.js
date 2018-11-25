const AWS = require('aws-sdk'),
  sar = new AWS.ServerlessApplicationRepository({region:'us-east-1'});

module.exports = {
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