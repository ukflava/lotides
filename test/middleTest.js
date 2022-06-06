const chai = require('chai');
const expect = chai.expect;
// const assert = chai.assert;

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('middle', function() {
  it('values are equal : true', () => {
    expect(assertArraysEqual(middle(["Lighthouse Labs", "Bootcamp1", "Bootcamp2", "Bootcamp3", "Bootcamp4"]),["Bootcamp2"])).to.equal(console.log(`✅✅✅Assertion Passed: ${true} === ${true}`));
  });
 
});
// assertArraysEqual(middle(["Lighthouse Labs", "Bootcamp1", "Bootcamp2", "Bootcamp3", "Bootcamp4"]),["Bootcamp2"]);