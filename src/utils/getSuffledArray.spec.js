const {expect} = require('chai');
const {getShuffledArray} = require('./getShuffledArray');
const {colors} = require('../const');

it('should return random array', function() {
  const randomArray = getShuffledArray(colors);
  expect(randomArray.length > 0).to.be.true;
});

it('should return random array', function() {
  const randomArray = getShuffledArray([]);
  expect(randomArray.length > 0).to.be.false;
});
