const chai = require('chai');
const expect = chai.expect;
// const assert = chai.assert;
// const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

describe('assertArrays are Equal', function() {
  it('Arrays are equal : true', () => {
    expect(assertArraysEqual([1, 1], [1, 1])).to.equal(console.log(`✅✅✅Assertion Passed: ${true} === ${true}`));
  });
 
});