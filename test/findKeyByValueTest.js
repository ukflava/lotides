const chai = require('chai');
const assert = chai.assert;
const findKeyByValue = require('../findKeyByValue');

// save both assert and expect to remember proper syntaxis


describe('#Find key by given value', function() {
  it('return key  of given object as a string', () => {
    const bestTVShowsByGenre = {
  
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };


    assert.isString(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  });
  it('Given value and object return key', () => {
    const bestTVShowsByGenre = {
  
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });


});

// (findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")