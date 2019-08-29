const {getColorCountInMetrix} = require('./getColorCountInMetrix');

/*
#getRandomColor

if the one pass 3 seprate colors in 3X3 colors table
it will spread in equal numbers in Metrix if isEqual: true
*/

const getRandomColor = (metrix, colors, isEqual) => {
  let colorsLength = colors.length;
  let color = colors[Math.floor(Math.random() * colors.length)];
  let colorCount = getColorCountInMetrix(metrix, color);

  while (isEqual && colorCount === colorsLength) {
    color = colors[Math.floor(Math.random() * colors.length)];
    colorCount = getColorCountInMetrix(metrix, color);
  }

  return color;
};

module.exports = {getRandomColor};
