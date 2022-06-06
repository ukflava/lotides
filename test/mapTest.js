const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const map = require('../map');



describe('#Map our input by callback', function() {
  it('return value at index 0', () => {
    expect(map(["hello", "world"], word => word[0])).to.not.deep.equal(["hello", "world"]);
  });
  it('Fn returns Array', () => {
    assert.isArray(map(["hello", "world"], word => word[0]));
  });


});


map(["hello", "world"], word => word[0]);
// ,[ 'g', 'c', 't', 'm', 't' ])