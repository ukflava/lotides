const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const eqArrays = require('../eqArrays');

// save both assert and expect to remember proper syntaxis


describe('eqArrays', function() {
  it('different arrays are false', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
  it('same Arrays are true', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it('different nested arrays are false', () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
  it('same nested arrays are true', () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.equal(true);
  });

});

