const {colors} = require('./const');
const {getShuffledArray} = require('./utils/getShuffledArray');

const ColorMetrix = require('./application');

const shuffledColors = getShuffledArray(colors);

const dimension = colors.length;
const game = new ColorMetrix({
  colors,
  dimension,
});

game.genrateMatrxi();
game.setColorPriority();
game.getBestRowToStart();
game.chooseTile();
game.start();
