const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrNum = String(n).split('');
  let arr = [];
  for (let i = 0; i < arrNum.length; i++) {
    let change = arrNum.slice();
    change[i] = '';
    arr.push(Number(change.join(''))); 
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
