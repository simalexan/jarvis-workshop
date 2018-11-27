
const comprehendRepository = require('./comprehend-repository'),
  amzMemory = require('./amazon-memory');

const assistantVerbs = ['need', 'want', 'have', 'like', 'must', 'require', 'could', 'would', 'can', 'will'];

module.exports = function (text) {
  // 1. Get all syntax information
  return comprehendRepository(text).then(sentenceElements => {
    let verbs = sentenceElements
      .filter(element => element.PartOfSpeech.Tag == 'VERB')
      .filter(verb => !assistantVerbs.includes(verb.Text));
    let nouns = sentenceElements.filter(element => element.PartOfSpeech.Tag == 'NOUN' || element.PartOfSpeech.Tag == 'PROPN');
    let adps = sentenceElements.filter(element => element.PartOfSpeech.Tag == 'ADP');
    // 2. Create verbs and action groups based on that
    let actionGroups = verbs.map(verb => {
      const nounsAfterVerbPosition = nouns.filter(noun => noun.TokenId > verb.TokenId);
      return {
        predicate: verb,
        object: nounsAfterVerbPosition[0]
      }
    });

    let inputOutputs = adps.map(adp => {
      const nounsAfterAdpPosition = nouns.filter(noun => noun.TokenId > adp.TokenId);
      return {
        adp: adp,
        object: nounsAfterAdpPosition[0]
      }
    });

    // 3. Create verbs and action groups based on that - divide process elements to input, process, output
    return divideProcessElements(actionGroups, inputOutputs);
  });
}


function divideProcessElements(actionGroups, inputOutputs) {

  const result = {
    input: null, process: null, output: null
  };

  let previousAction, nextAction;

  let processes = actionGroups.map((action, index) => {
    nextAction = actionGroups[index];

    let currentInput = getActionInput(inputOutputs, action, index, actionGroups);

    let currentOutput = getActionOutput(inputOutputs, action, index, actionGroups);

    if (currentInput && currentOutput && (currentOutput.object.Text === 'one' || currentOutput.object.Text === 'same')) {
      currentOutput.object.Text = currentInput.object.Text; // its repeating from the 
    }

    let processElement = {
      input: currentInput ? currentInput.object.Text : null,
      process: action.predicate.Text,
      output: currentOutput ? currentOutput.object.Text : null
    }

    if (processElement.input) processElement.input = amzMemory(processElement.input.toLowerCase());
    if (processElement.output) processElement.output = amzMemory(processElement.output.toLowerCase());

    return processElement;
  });

  return processes;
}

function getActionInput(potentialInputs, action, index, allActions) {
  let previousAction = allActions[index - 1],
    input;

  if (allActions.length <= 1) {
    input = potentialInputs.find(io => io.adp.Text.toLowerCase() === 'from');
    if (input) return input;
    input = potentialInputs.filter(io => io.adp.TokenId < action.predicate.TokenId)[0];
    return input;
  }

  input = !previousAction ?
    potentialInputs.filter(io => io.adp.TokenId < action.predicate.TokenId)[0] :
    potentialInputs.filter(io => (io.adp.TokenId > previousAction.predicate.TokenId && io.adp.TokenId < action.predicate.TokenId))[0];
  return input;
}

function getActionOutput(potentialOutputs, action, index, allActions) {
  let nextAction = allActions[index + 1],
    output;

  if (allActions.length <= 1) {
    output = potentialOutputs.find(io => io.adp.Text.toLowerCase() === 'to');
    if (output) return output;
    return potentialOutputs.filter(io => io.adp.TokenId > action.predicate.TokenId)[0];
  }

  output = !nextAction ?
    potentialOutputs.filter(io => io.adp.TokenId > action.predicate.TokenId)[0] :
    potentialOutputs.filter(io => (io.adp.TokenId > action.predicate.TokenId && io.adp.TokenId < nextAction.predicate.TokenId))[0];
  return output;
}