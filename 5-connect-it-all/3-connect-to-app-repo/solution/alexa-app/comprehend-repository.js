const AWS = require('aws-sdk'),
  comprehend = new AWS.Comprehend({region:'us-east-1'});

module.exports = {
  comprehendAnalyze: (sentence) => {
    return comprehend.detectSyntax({
      LanguageCode: 'en',
      Text: sentence
    }).promise()
    .then(data => {
      return data.SyntaxTokens || [];
    }).catch(err => {
      console.log(err);
    })
  }
};