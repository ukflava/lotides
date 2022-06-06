const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const flatten = require('../flatten');




describe('#Flat all the Arrays you can find', function() {

  it('Fn returns array', () => {
    assert.isArray(flatten([1, [[2], [3, [4]]], 5, [6]]));
  });

  it('return flatten array with given values ', () => {
    expect(flatten([1, [[2], [3, [4]]], 5, [6]])).to.deep.equal([1,2,3,4,5,6]);
  });

});

// flatten([1, [[2], [3, [4]]], 5, [6]])