const chai = require('chai');
// const expect = chai.expect;
const assert = chai.assert;

const tail = require('../tail');

describe('#Tail check', function() {
  it('return array without head', () => {
    assert.deepEqual(tail([1, 2, 3]), [ 2, 3]);
  });
  it('dont return given array', () => {
    assert.notDeepEqual(tail([1, 2, 3]), [1, 2, 3]);
  });
 
});


// const tail = require('../tail')

// describe('tail', function() {
//   it('array without head', () => {
//        expect(tail([1,2,3])).to.equal([ 2, 3 ]);
//   });
 
// });