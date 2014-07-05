var query = require('../lib');
var demand = require('must');

describe('n4-query', function () {
  it('should exist', function () {
    demand(query).to.exist();
  });
});
