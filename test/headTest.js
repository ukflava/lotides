// const chai = require('chai');
// const expect = chai.expect;
// const assert = chai.assert

// const head = require('../head')
// const assertEqual = require('../assertEqual')

// describe('assert + head', function() {
//   it('values are equal : true', () => {
//        expect(head([5,6,7])).to.equal(5);
//   });
 
// });

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});