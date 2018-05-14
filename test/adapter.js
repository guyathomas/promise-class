var Pledge = require('../solution/pledge');

module.exports = {
  resolved: function(value) {
    var pledge = new Pledge();
    pledge.fulfill(value);
    return pledge;
  },
  rejected: function(reason) {
    var pledge = new Pledge();
    pledge.reject(reason);
    return pledge;
  },
  deferred: function() {
    var pledge = new Pledge();
    return {
      promise: pledge,
      resolve: pledge.fulfill,
      reject: pledge.reject
    };
  }
};