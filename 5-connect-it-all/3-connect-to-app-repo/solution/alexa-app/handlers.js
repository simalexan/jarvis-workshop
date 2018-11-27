'use strict';

const core = require('./core'),
  combiner = require('./combiner');

const handlers = {
  'LaunchRequest': function () {
    this.emit('HelloWorldIntent');
  },

  'HelloWorldIntent': function () {
    //build response first using responseBuilder and then emit
    this.response.speak('Hello World!');
    this.emit(':responseReady');
  },

  'CreateApp': function () {
    //build response first using responseBuilder and then emit
    this.response.speak('Let me create an app for you!');
    this.emit(':responseReady');
  },

  'AddService': function () {
    const intentObj = this.event.request.intent;
    if (!intentObj.slots.serviceQuery.value) {
      this.response.speak('Search Query is missing');
    } else {
      let foundAppName,
        input, process, output, stackName,
        query = intentObj.slots.serviceQuery.value;

      core(query).then(processElements => {

        let processObj = processElements[0];
        input = processObj.input;
        process = processObj.process;
        output = processObj.output;
        console.log(input, process, output);
        return combiner.findComponentByProcess(input, process, output);
      }).then(foundApp => {

        let promise;
        
        if (foundApp && foundApp.name) {
          foundAppName = foundApp.name;
          promise = createService(foundComponent.ApplicationId);
        } else {
          promise = Promise.resolve();
          this.response.speak(`There's no apps that fit your inquiry!`);
        }
        return promise;
      }).then(reply => {
        this.response.speak(`I've found an app named ${foundApp.name} and am deploying it right now, should be available in a minute or two!`);
      });
      
    }
    this.emit(':responseReady');
  }
};

function createService(appId) {
  return new Promise((resolve, reject) => {
    SAR.getAppById(appId)
    .then(response => {
      return SAR.createCFChangeSet(appId, '11111-dynamodb-display-stack');
    }).then(cfResponse => {
      setTimeout(function () {
        executeCFSet(cloudformation, cfResponse.ChangeSetId, cfResponse.StackId, function(){});
      }, 5000);
      resolve(cfResponse);
    })
    .catch(err => {
      reject(err);
    });
  });
}

module.exports = handlers;
