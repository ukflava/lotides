const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert

const assertEqual = require('../assertEqual');

describe('assertEqual', function() {
  it('values are equal : true', () => {
       expect(assertEqual(1, 1)).to.equal(console.log(`✅✅✅Assertion Passed: ${1} === ${1}`));
  });
 
});