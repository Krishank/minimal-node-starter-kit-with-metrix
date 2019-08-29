const getElementsFromRow = (metrix, row, element) =>
  metrix[row].filter(obj => obj.value === element);

const getElementsFromColumn = () => {};

module.exports = {getElementsFromRow, getElementsFromColumn};
