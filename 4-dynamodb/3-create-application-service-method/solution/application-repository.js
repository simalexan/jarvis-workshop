const dynamoDB = require('./dynamo-repository'),
  APPLICATIONS_TABLE = 'applications',
  APPLICATIONS_PKEY = 'appId',
  PROCESS_TABLE = 'processes';
  PROCESS_PKEY = 'processId';

module.exports = {
  createApplication: (appName) => {
    return dynamoDB.saveToTable(APPLICATIONS_TABLE, APPLICATIONS_PKEY, { appName: appName, isActive: true })
      .catch(err => {
        console.log('--- ERR IN CREATE APPLICATION --');
        console.log(err);
        throw err;
      });
  },
  addApplicationProcess: function addApplicationProcess (appId, inputName, processName, outputName, commandText, stackName) {
    return dynamoDB.saveToTable(PROCESS_TABLE, PROCESS_PKEY, { 
      appId, 
      inputName,
      processName,
      outputName,
      commandText,
      stackName
    })
    .catch(err => {
      console.log('--- ERR IN CREATE PROCESS --');
      console.log(err);
      throw err;
    });
  }
};