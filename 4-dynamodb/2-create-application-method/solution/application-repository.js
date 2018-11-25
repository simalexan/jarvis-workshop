const dynamoDB = require('./dynamo-repository'),
  APPLICATIONS_TABLE = 'applications',
  APPLICATIONS_PKEY = 'appId';

module.exports = {
  createApplication: (appName) => {
    return dynamoDB.saveToTable(APPLICATIONS_TABLE, APPLICATIONS_PKEY, { appName: appName, isActive: true })
      .catch(err => {
        console.log('--- ERR IN CREATE APPLICATION --');
        console.log(err);
        throw err;
      });
  }
};