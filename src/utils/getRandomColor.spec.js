const {expect} = require('chai');
const {getRandomColor} = require('./getRandomColor');
const {metrixMock, colorsMock} = require('../mocks');

it('should return random color', function() {
  const color = getRandomColor(metrixMock, colorsMock);
  const index = colorsMock.indexOf(color);
  expect(color).to.be.string;
  expect(index !== -1).to.be.true;
});

it('should return random color which count is not more then dimension', function() {
  const color = getRandomColor(metrixMock, colorsMock);
  const index = colorsMock.indexOf(color);
  expect(color).to.string;
  expect(index !== -1).to.be.true;
});

it('should fail', function() {
  const color = getRandomColor(metrixMock, 'noColor');
  const index = colorsMock.indexOf(color);
  expect(index !== -1).to.be.false;
});
