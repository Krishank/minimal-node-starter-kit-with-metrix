/**
   for each move, choose the color that will result in the largest number of tiles
   connected to the origin;
   if there is a tie, break ties by choosing the color that has the lowest rank among the colors.
 */
const _ = require('lodash');

const getBestTile = (metrix, colorPriority) => {
  let bestColorToStartWith = _.maxBy(this.colorsPriority, 'count');
  const squareToStart = isConnectdWithOrigin(metrix, bestColorToStartWith);
  while (squareToStart === false) {
    bestColorToStartWith = _.maxBy(this.colorsPriority, 'count');
  }
  return squareToStart;
};

const isConnectdWithOrigin = (metrix, color) => {
  const colorOf00 = metrix[0][0];
  const colorOf01 = metrix[0][1];
  const colorOf10 = metrix[1][0];
  const colorOf11 = metrix[1][1];

  const colorWithPosition = {};
  // I could use loop here or switch
  if (colorOf00 === color) {
    return {color, index: 00};
  } else if (colorOf01 === color) {
    return {color, index: 01};
  } else if (colorOf10 === color) {
    return {color, index: 10};
  } else if (colorOf11 === color) {
    return {color, index: 11};
  }

  return false;
};

module.exports = {getBestTile, isConnectdWithOrigin};
