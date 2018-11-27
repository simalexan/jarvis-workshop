'use strict';

const core = require('../core'),
  combiner = require('../combiner');

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
        input, process, output, stackName;

      core(query).then(processElements => {

        let processObj = processElements[0];
        input = processObj.input;
        process = processObj.process;
        output = processObj.output;
        console.log(input, process, output);
        return combiner.findComponentByProcess(input, process, output);
      }).then(foundApp => {
        
        if (foundApp && foundApp.name) {
          foundAppName = foundApp.name;
          this.response.speak(`I've found an app named ${foundApp.name}!`);
        } else {
          this.response.speak(`There's no apps that fit your inquiry!`);
        }
        
      })
      
    }
    this.emit(':responseReady');
  }
};

module.exports = handlers;
