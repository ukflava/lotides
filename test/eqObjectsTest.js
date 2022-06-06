const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const eqObjects = require('../eqObjects');

describe('#Compare all entries in an Objects', function() {
  it('objects with same arrays are true', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    expect(eqObjects(cd, dc)).to.equal(true);
  });
  it('objects with different arrays are false', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 4], c: "4" };
    assert.isFalse(eqObjects(cd, dc));
  });
  it('equal objects are true', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });
  it(' not equal objects are false', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "4", a: "1" };
    assert.isFalse(eqObjects(ab, ba));
  });
  it('object with same nested arrays are true', () => {
   
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('object with different nested arrays are false', () => {
    
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

});



