
const comprehendRepository = require('./comprehend-repository'),
amzMemory = require('./amazon-memory');

const command = 'I want to create a service to copy files from one S3 bucket to another one.',
assistantVerbs = ['need', 'want', 'have', 'like', 'must', 'require', 'could', 'would', 'can', 'will'];

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
  console.log(inputOutputs)
});
}
