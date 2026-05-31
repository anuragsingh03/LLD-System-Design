/**
 * Equivalent of Java class IdleState implements ATMState
 *
 * The ATM is idle — no card inserted.
 * Only valid action : insertCard → moves to HasCardState
 * All other actions : print error
 */
const ATMState = require('./ATMState');

class IdleState extends ATMState {
  insertCard(atm, card) {
    console.log(`  [IdleState] Card inserted: ${card.getCardNumber()}`);
    atm.setCard(card);
    const HasCardState = require('./HasCardState');
    atm.setATMState(new HasCardState());
    console.log('  [IdleState] State changed to HasCardState');
  }

  authenticatePIN(atm, account, enteredPin) {
    console.log('  [IdleState] Please insert card first.');
  }

  withdraw(atm, account, amount) {
    console.log('  [IdleState] Please insert card first.');
  }

  ejectCard(atm) {
    console.log('  [IdleState] No card to eject.');
  }
}
module.exports = IdleState;