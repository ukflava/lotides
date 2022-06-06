const chai = require('chai');
const expect = chai.expect;
// const assert = chai.assert;

const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

describe('#Return middle in array', function() {
  it('values are equal : true', () => {
    expect(middle(["Lighthouse Labs", "Bootcamp1", "Bootcamp2", "Bootcamp3", "Bootcamp4"])).to.deep.equal(["Bootcamp2"]);
  });
 
});
// assertArraysEqual(middle(["Lighthouse Labs", "Bootcamp1", "Bootcamp2", "Bootcamp3", "Bootcamp4"]),["Bootcamp2"]);