/**
 * Equivalent of Java class PinVerifiedState implements ATMState
 *
 * PIN has been verified — user can now withdraw.
 * Valid actions:
 *   withdraw  → dispenses cash, moves to IdleState (or NoCashState if ATM empty)
 *   ejectCard → moves back to IdleState
 */
const ATMState = require('./ATMState');

class PinVerifiedState extends ATMState {
  insertCard(atm, card) {
    console.log('  [PinVerifiedState] Card already inserted and PIN verified.');
  }

  authenticatePIN(atm, account, enteredPin) {
    console.log('  [PinVerifiedState] PIN already verified. Please proceed with withdrawal.');
  }

  withdraw(atm, account, amount) {
    // 1. Check account balance
    if (account.getBalance() < amount) {
      console.log(`  [PinVerifiedState] Insufficient account balance. Available: Rs.${account.getBalance()}`);
      return;
    }

    // 2. Check ATM cash availability
    if (!atm.getCashDispenser().hasCash(amount)) {
      console.log('  [PinVerifiedState] ATM has insufficient cash. Switching to NoCashState.');
      const NoCashState = require('./NoCashState');
      atm.setATMState(new NoCashState());
      return;
    }

    // 3. Dispense cash
    atm.getCashDispenser().dispenseCash(amount);

    // 4. Deduct from account
    account.deductBalance(amount);
    console.log(`  [PinVerifiedState] Withdrawal of Rs.${amount} successful.`);
    console.log(`  [PinVerifiedState] Updated account balance: Rs.${account.getBalance()}`);

    // 5. Eject card and return to Idle
    atm.setCard(null);
    const IdleState = require('./IdleState');
    atm.setATMState(new IdleState());
    console.log('  [PinVerifiedState] Card ejected. State changed to IdleState');
  }

  ejectCard(atm) {
    console.log('  [PinVerifiedState] Card ejected without withdrawal.');
    atm.setCard(null);
    const IdleState = require('./IdleState');
    atm.setATMState(new IdleState());
    console.log('  [PinVerifiedState] State changed to IdleState');
  }
}
module.exports = PinVerifiedState;