/**
 * Equivalent of Java class NoCashState implements ATMState
 *
 * ATM has run out of cash.
 * NO operations are allowed — ATM must be refilled externally.
 * This is a terminal/blocked state — all actions print an error.
 */
const ATMState = require('./ATMState');

class NoCashState extends ATMState {
  insertCard(atm, card) {
    console.log('  [NoCashState] ATM is out of cash. Cannot accept cards. Please use another ATM.');
  }

  authenticatePIN(atm, account, enteredPin) {
    console.log('  [NoCashState] ATM is out of cash. No transactions possible.');
  }

  withdraw(atm, account, amount) {
    console.log('  [NoCashState] ATM is out of cash. Cannot process withdrawal.');
  }

  ejectCard(atm) {
    console.log('  [NoCashState] No card inserted.');
  }
}
module.exports = NoCashState;