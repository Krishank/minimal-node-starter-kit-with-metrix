/* The class is not responsible to to shuffle the array of colors it will just take
it as a input becasue they can chnage */

const getShuffledArray = array => {
  let rendomArray = array;
  let currentIndex = rendomArray.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = rendomArray[currentIndex];
    rendomArray[currentIndex] = rendomArray[randomIndex];
    rendomArray[randomIndex] = temporaryValue;
  }
  return rendomArray;
};

module.exports = {getShuffledArray};
