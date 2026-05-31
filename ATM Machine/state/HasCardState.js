/**
 * Equivalent of Java class HasCardState implements ATMState
 *
 * Card is inserted — waiting for PIN.
 * Valid actions:
 *   authenticatePIN → moves to PinVerifiedState (if correct)
 *   ejectCard       → moves back to IdleState
 */
const ATMState = require('./ATMState');

class HasCardState extends ATMState {
  insertCard(atm, card) {
    console.log('  [HasCardState] Card already inserted. Please enter your PIN.');
  }

  authenticatePIN(atm, account, enteredPin) {
    if (account.getPin() === enteredPin) {
      console.log('  [HasCardState] PIN verified successfully.');
      const PinVerifiedState = require('./PinVerifiedState');
      atm.setATMState(new PinVerifiedState());
      console.log('  [HasCardState] State changed to PinVerifiedState');
    } else {
      console.log('  [HasCardState] Incorrect PIN. Card ejected for security.');
      atm.setCard(null);
      const IdleState = require('./IdleState');
      atm.setATMState(new IdleState());
    }
  }

  withdraw(atm, account, amount) {
    console.log('  [HasCardState] Please authenticate PIN before withdrawal.');
  }

  ejectCard(atm) {
    console.log('  [HasCardState] Card ejected.');
    atm.setCard(null);
    const IdleState = require('./IdleState');
    atm.setATMState(new IdleState());
    console.log('  [HasCardState] State changed back to IdleState');
  }
}
module.exports = HasCardState;