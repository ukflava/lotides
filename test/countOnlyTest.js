const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const countOnly = require('../countOnly');

// save both assert and expect to remember proper syntaxis


describe('#Count letters in a string', function() {
  it('return object of counted letters', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const checker = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };


    expect(countOnly(firstNames, checker)).to.deep.include({ Fang: 2, Jason: 1 });
  });
  it('Fn returns object', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const checker = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.isObject(countOnly(firstNames, checker));
  });


});

