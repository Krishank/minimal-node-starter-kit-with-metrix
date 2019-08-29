const _ = require('lodash');
const {genrateMetrix, getElementsFromRow, swapSquares} = require('./utils');
const {getColorCountInMetrix} = require('./utils');
const {errors, colors, moves} = require('./const');
const {getBestTile} = require('./utils');

class ColorMetrix {
  constructor({colors, dimension}) {
    this.colors = colors;
    this.dimension = dimension;
    this.metrix = {};
    this.moves = {};
    this.colorsPriority = [];
    this.constructor.inputValidator(colors, dimension);
    // this.genrateMatrxi();
    // this.setColorPriority();
  }
  static inputValidator(colors, dimension) {
    const {logError, userError} = errors.inValidMetrix;
    console.info(
      `The one can define validation which they wants to apply on passed config
    or the intial input \n The Data passed at the time of intiating the call
      Colors - ${JSON.stringify(colors)} and Dimensions - ${dimension}`,
    );
    if (colors.length > dimension * dimension) {
      console.error(logError);
      throw new Error(`${errors.userError}`);
    }
  }
  static originTile() {
    console.info(
      `Handle this logic :- A tile is connected to the origin (the tile in the upper left corner) if it has the same color as the origin and there is a path to the origin consisting only of tiles of this color.`,
    );
  }
  genrateMatrxi() {
    console.info(
      `The one can call this to reset or regenrate the metrix ${this.colors}`,
    );
    this.metrix = genrateMetrix(this.dimension, this.colors);
    console.log('Genrated Metrix', this.metrix);
  }
  setColorPriority() {
    this.colors.map(color => {
      let count = getColorCountInMetrix(this.metrix, color);
      this.colorsPriority.push({
        color,
        count,
      });
    });

    console.log(
      `Color Priority Data is \n ${JSON.stringify(this.colorsPriority)}`,
    );
  }
  chooseTile() {
    // 2 more logic needs to be addd connected to origin anf breaking tie
    const bestColorToStartWith = _.maxBy(this.colorsPriority, 'count');
    console.info(
      `Best Color to start with is ${JSON.stringify(bestColorToStartWith)}`,
    );

    const chooseTile = getBestTile(this.metrix, this.colorsPriority);

    console.info(`Krishank ${JSON.stringify(bestColorToStartWith)}`);
  }
  logMoves() {
    console.info(
      `can use to log all moves a give game for rplay or backtracking purpose`,
    );
  }
  start() {
    /* As of now we know the Priority colot we can flat the matrix, sort it and then commpar it one by one with every cell
    in old metrix and make our move */
    // const flatMetrix = _.flatten(this.metrix);
    // const sortedMetrix = _.orderBy(flatMetrix, ['colorWeight'], ['asc']);
    // console.log('sortedMetrix', sortedMetrix);
    // for (let i = 0; i < sortedMetrix.length; i++) {
    //   const newIndex = sortedMetrix[i].index;
    // }
  }
  getBestRowToStart() {
    console.info(
      `This will analyze diffrent Rows of Matrix and helpt choose row to start`,
    );
    for (let row = 0; row < this.dimension; row++) {
      for (let j = 0; j < this.colors.length; j++) {
        const colorCount = getElementsFromRow(this.metrix, row, this.colors[j]);
        console.info(`${colorCount.length} ${this.colors[j]} in Row ${row}`);
      }
    }
  }
}

module.exports = ColorMetrix;
