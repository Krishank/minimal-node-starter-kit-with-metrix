const {getShuffledArray} = require('./getShuffledArray');
const {genrateMetrix} = require('./genrateMetrix');
const {
  getElementsFromRow,
  getElementsFromColumn,
} = require('./getElementsFromMetrix');
const {swapSquares} = require('./swapSquares');
const {getColorCountInMetrix} = require('./getColorCountInMetrix');
const {getRandomColor} = require('./getRandomColor');
const {getBestTile} = require('./getBestTile');

module.exports = {
  getShuffledArray,
  genrateMetrix,
  getElementsFromRow,
  getElementsFromColumn,
  swapSquares,
  getColorCountInMetrix,
  getRandomColor,
  getBestTile,
};
