//
// string.js
//
// test - hello world, basically
//

var expect = require('chai').expect;

describe('Math', function () {
  describe('#max', function () {
    it('returns huge number from ARRRRguments!', function () {
      var max = Math.max(1, 2, 10, 3);
      expect(max).to.equal(10);
    });
  });
});
