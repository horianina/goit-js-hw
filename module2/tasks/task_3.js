'use strict';

const findLongestWord = function (string) {
  const strSplit = string.split(' ');

  let longestWord = strSplit[0];

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      // If strSplit[i].length больше, чем сравнимое слово...
      longestWord = strSplit[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
