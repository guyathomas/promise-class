const Pledge = require('../solution/pledge');

module.exports = {
  resolved: function(value) {
    const pledge = new Pledge();
    pledge.fulfill(value);
    return pledge;
  },
  rejected: function(reason) {
    const pledge = new Pledge();
    pledge.reject(reason);
    return pledge;
  },
  deferred: function() {
    const pledge = new Pledge();
    return {
      promise: pledge,
      resolve: pledge.fulfill,
      reject: pledge.reject
    };
  }
};