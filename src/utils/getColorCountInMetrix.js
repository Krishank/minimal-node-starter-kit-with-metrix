const _ = require('lodash');

/** This will allow to set the priority*/
const getColorCountInMetrix = (metrix, color) => {
  const flatMetrix = _.flatten(metrix);
  const getSquares = flatMetrix.filter(obj => obj.value === color);
  return getSquares.length;
};

module.exports = {getColorCountInMetrix};
