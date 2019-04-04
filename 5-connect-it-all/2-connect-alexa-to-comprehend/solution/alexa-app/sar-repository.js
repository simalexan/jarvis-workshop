const rp = require('minimal-request-promise'),
  SEARCH_APPS_PATH = 'https://eqhtwlzt79.execute-api.us-east-1.amazonaws.com/Prod/search?query=',
  AWS = require('aws-sdk'),
  sar = new AWS.ServerlessApplicationRepository({ region: 'us-east-1' }),
  cf = new AWS.CloudFormation({ region: 'us-east-1' });

module.exports = {
  
};
