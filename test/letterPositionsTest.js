const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const letterPositions = require('../letterPositions');

// save both assert and expect to remember proper syntaxis


describe('#Return position of every letter in a string', function() {
  it('return object of  letter indexes', () => {
    expect(letterPositions("lighthouse in the house")).to.deep.include({h: [ 3, 5, 13, 15 ]});
  });
  it('Fn returns object', () => {
    assert.isObject(letterPositions("yourInput"));
  });


});
