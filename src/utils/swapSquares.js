const swapSquares = (metrix, square1, square2) => {
  let tmp = square1;
  metrix[square1.index] = square2;
  metrix[tmp.index] = tmp;
};

module.exports = {swapSquares};
