const {errors} = require('../const');
const {getRandomColor} = require('./getRandomColor');

// I took a refrence for #genrateMetrix method from https://code.likeagirl.io/create-a-nxn-matrix-spiral-with-javascript-955ee18402f7 and updated it as per my need
const genrateMetrix = (dimension, colors) => {
  const {logError, userError} = errors.inValidMetrix;
  const cells = dimension * dimension;
  const totalColors = colors.length;
  if (cells < totalColors) {
    // Can be used to log error in server for debugging (winston is a good node logger for this) not have much time so just logging console
    console.error(logError);
    throw new Error(userError);
  }
  let metrix = new Array(dimension)
    .fill()
    .map(() => new Array(dimension).fill(''));
  let counter = 1;
  let startCol = 0;
  let endCol = dimension - 1;
  let startRow = 0;
  let endRow = dimension - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      const value = getRandomColor(metrix, colors);
      const index = `${startRow}${i}`;
      metrix[startRow][i] = {
        index,
        value,
      };
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      const value = getRandomColor(metrix, colors);
      const index = `${j}${endCol}`;
      metrix[j][endCol] = {
        index,
        value,
      };
      counter++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      const value = getRandomColor(metrix, colors);
      const index = `${endRow}${i}`;
      metrix[endRow][i] = {
        index,
        value,
      };
      counter++;
    }

    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      const value = getRandomColor(metrix, colors);
      const index = `${i}${startCol}`;
      metrix[i][startCol] = {
        index,
        value,
      };
      counter++;
    }

    startCol++;
  }

  return metrix;
};

module.exports = {genrateMetrix};
