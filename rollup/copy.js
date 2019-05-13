const fs = require('fs');

module.exports = function (sourcesToDestinations = {}) {
  return {
    name: 'copy',
    generateBundle: function () {

      for (var key in sourcesToDestinations) {
        const source = key;
        const destination = sourcesToDestinations[key];

        fs.copyFile(
          source,
          destination,
          (err) => { if (err) throw err; },
        );
      }
    }
  };
};
