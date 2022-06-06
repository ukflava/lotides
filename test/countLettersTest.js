const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const countLetters = require('../countLetters');

// save both assert and expect to remember proper syntaxis


describe('#Count letters in a string', function() {
  it('return object of counted letters', () => {
    expect(countLetters("lighthouse in the house")).to.deep.include({ e: 3 });
  });
  it('Fn returns object', () => {
    assert.isObject(countLetters("house"));
  });


});

