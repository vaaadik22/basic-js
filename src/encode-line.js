const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = '';
  let subStr = '';
  str.split('').forEach((el, i) => {
    if (subStr == '') {
      subStr = el;
    } else if (el == subStr[0]) {
      subStr += el;
    } else {
      if (subStr.length == 1) {
        str += subStr;
      } else {
        str += subStr.length + subStr[0];
      }
      subStr = el;
    }
    if (i == str.length - 1) {
      if (subStr.length == 1) {
        str += subStr;
      } else {
        str += subStr.length + subStr[0];
      }
    }
  });
  return str;
}

module.exports = {
  encodeLine
};
