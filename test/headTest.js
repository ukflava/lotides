const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert

const head = require('../head')
const assertEqual = require('../assertEqual')

describe('assert + head', function() {
  it('values are equal : true', () => {
       expect(head([5,6,7])).to.equal(5);
  });
 
});