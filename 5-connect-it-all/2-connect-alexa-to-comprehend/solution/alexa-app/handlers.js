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
      
    }
    this.emit(':responseReady');
  }
};

module.exports = handlers;
