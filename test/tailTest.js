const chai = require('chai');
// const expect = chai.expect;
const assert = chai.assert;

const tail = require('../tail');

describe('tail check', function() {
  it('array without head', () => {
    assert.deepEqual(tail([1, 2, 3]), [ 2, 3]);
  });
 
});


// const tail = require('../tail')

// describe('tail', function() {
//   it('array without head', () => {
//        expect(tail([1,2,3])).to.equal([ 2, 3 ]);
//   });
 
// });