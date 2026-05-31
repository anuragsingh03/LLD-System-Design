/**
 * Equivalent of Java interface ATMState
 *
 * Defines ALL actions the ATM can receive.
 * Every concrete state implements this and decides:
 *  - Which actions are valid in that state
 *  - What the next state should be after the action
 */
class ATMState {
  insertCard(atm, card)            { throw new Error('insertCard() not implemented'); }
  authenticatePIN(atm, account, enteredPin) { throw new Error('authenticatePIN() not implemented'); }
  withdraw(atm, account, amount)   { throw new Error('withdraw() not implemented'); }
  ejectCard(atm)                   { throw new Error('ejectCard() not implemented'); }
}
module.exports = ATMState;