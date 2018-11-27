const sar = require('../sar-repository'); // import sar-repository

module.exports = {
  findComponentByProcess: function(input, process, output) {
    return sar.searchApps(`${input} ${process} ${output}`).then(apps => {
      const appsContainingElements = apps.filter(app => {
        const hasInput = input ? app.Labels.includes(input.toLowerCase()) : true;
        const hasOutput = output ? app.Labels.includes(output.toLowerCase()) : true;
        return hasInput && hasOutput &&
          (app.Labels.includes(process.toLowerCase()) || app.Description.includes(output.toLowerCase()));
      });
      return appsContainingElements[0]; // return the first one that's most matching
    }).catch(err => {
      console.log(err);
      throw err;
    });
  }
};