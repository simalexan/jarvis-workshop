'module exports';

const Alexa = require('alexa-sdk');
const handlers = require('./handlers');

function lambda(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  // ALEXA_APP_ID is your skill ID which can be found in the Amazon developer console where you create the skill.
  alexa.appId = process.env.ALEXA_APP_ID
  // Register handlers
  alexa.registerHandlers(handlers);
  alexa.execute();
}

exports.handler = lambda;
