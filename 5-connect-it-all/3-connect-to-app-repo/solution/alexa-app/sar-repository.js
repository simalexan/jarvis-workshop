const rp = require('minimal-request-promise'),
  SEARCH_APPS_PATH = 'https://eqhtwlzt79.execute-api.us-east-1.amazonaws.com/Prod/search?query=',
  AWS = require('aws-sdk'),
  sar = new AWS.ServerlessApplicationRepository({ region: 'us-east-1' }),
  cf = new AWS.CloudFormation({ region: 'us-east-1' });

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
      .then(body => body.applications)
      .catch(error => {
        console.log(error);
        throw error;
      });
  },
  createCFChangeSet: function createCFChangeSet(appId, stackName) {
    const fullStackName = `${stackName}-${Math.floor(Math.random() * Math.floor(1000))}`;
    return sar.createCloudFormationChangeSet({
      ApplicationId: appId,
      ParameterOverrides: [],
      StackName: fullStackName
    }).promise()
      .then(response => {
        response.StackName = fullStackName;
        return response;
      })
      .catch(error => {
        console.log(error);
        error.message = `Sorry, I couldnt create your app changeset, an error occurred when creating your change set.`;
        throw error;
      })
  },
  executeCFChangeSet: (changeSetId, stackId, callback) => {
    var params = {
      ChangeSetName: changeSetId,
      StackName: stackId
    };
    cf.executeChangeSet(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        callback(err);
      }
      console.log(data);
      callback(data);
    });
  }
};