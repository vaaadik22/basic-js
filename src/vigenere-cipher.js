const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
      if (typeof message != 'string' || typeof key != 'string') throw new Error(`Incorrect arguments!`);
      let masKey = key.split('');
      var k = 0;
      let arrStroka = message.split('').map((el, i) => {
        let resp = this.next(el, masKey[k % masKey.length])
        k += resp[1]; 
        return resp[0];
      })
      return this.mashine ? arrStroka.join('') : arrStroka.reverse().join('');
    } catch (e) {
      throw new Error(`Incorrect arguments!`);
    }
  }
  decrypt() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
      if (typeof message != 'string' || typeof key != 'string') throw new Error(`Incorrect arguments!`);
      let masKey = key.split('');
      var k = 0;
      let arrStroka = message.split('').map((el, i) => {
        let resp = this.last(el, masKey[k % masKey.length])
        k += resp[1]; 
        return resp[0];
      })
      return this.mashine ? arrStroka.join('') : arrStroka.reverse().join('');
    } catch (e) {
      throw new Error(`Incorrect arguments!`);
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
