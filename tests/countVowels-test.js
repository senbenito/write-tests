'use strict';

const expect = require('chai').expect; // jshint ignore:line
const assert = require('chai').assert; // jshint ignore:line
const lib = require('../countVowels');
const emptyString = '';
const badString = "qwrty";
const goodString = "hello"


describe('countVowels', function() {

  it('should be a function', function() {
    assert.typeOf(lib.countVowels, 'function', 'countVowels is a function');
  });

  it('returns "invalid input" when given an empty string', function() {
    expect(lib.countVowels(emptyString)).to.equal('invalid input');
  });

  it('returns 0 when given a bad string', function() {
    expect(lib.countVowels(badString)).to.equal(0);
  });

  it('returns the number of vowels when given a string', function() {
    expect(lib.countVowels(goodString)).to.equal(2);
  });

  // it('returns -1 when the item is not found', function() {
  //   expect(lib.linearSearch(decimalArr, 0)).to.equal(-1);
  // });

});
