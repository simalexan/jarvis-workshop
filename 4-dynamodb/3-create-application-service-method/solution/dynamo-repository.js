const AWS = require('aws-sdk'),
  dynamoDb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'}),
  uuidv4 = require('uuid/v4');

module.exports = {
  saveToTable: (tableName, primaryKey, item) => {
    item[primaryKey] = uuidv4();
    let params = {
        TableName: tableName,
        Item: item
    }
    return dynamoDb.put(params)
    .promise()
    .catch(dbError => {
        if (dbError.code === 'ValidationException') {
            if (dbError.message.includes('reserved keyword')) errorResponse = `Error: You're using AWS reserved keywords as attributes`;
        }
        console.log(dbError);
        throw dbError;
    });
  }
};