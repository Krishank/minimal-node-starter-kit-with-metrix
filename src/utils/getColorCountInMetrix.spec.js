const {expect} = require('chai');
const {metrixMock, colorsMock} = require('../mocks');
const {getColorCountInMetrix} = require('./getColorCountInMetrix');

it('should return the color count', function() {
  const count = getColorCountInMetrix(metrixMock, colorsMock[0]);
  expect(count).to.equal(2);
});

it('should return 0', function() {
  const count = getColorCountInMetrix(metrixMock, 'noColor');
  expect(count).to.equal(0);
});
