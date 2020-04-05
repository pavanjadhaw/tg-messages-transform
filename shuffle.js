/**
 * Fisher–Yates shuffle Algorithm
 * for shuffling given array
 *
 * https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
 * https://bost.ocks.org/mike/shuffle/
 */

const shuffle = array => {
  let arrLength = array.length;

  // While there remain elements to shuffle…
  while (arrLength) {
    // Pick a remaining element…
    const randomIndex = Math.floor(Math.random() * arrLength--);

    // And swap it with the current element.
    [array[randomIndex], array[arrLength]] = [
      array[arrLength],
      array[randomIndex]
    ];
  }
  return array;
};

module.exports = shuffle;
