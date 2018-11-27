'use strict';

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
  }
};

module.exports = handlers;
