/**
 * Equivalent of Java class ATM  →  the CONTEXT class
 *
 * The Context:
 *  1. Holds the current ATMState
 *  2. Holds the CashDispenser (hardware)
 *  3. Holds the currently inserted Card
 *  4. Exposes all ATM actions — but NEVER decides what to do itself
 *     It delegates 100% to the current state: this.atmState.insertCard(this, card)
 *  5. Exposes setATMState() so states can switch to the next state
 *
 * Pattern: The ATM is dumb — it just forwards every action to whatever
 * state it's currently in. The state is smart — it knows what's valid
 * and what comes next.
 */
const IdleState      = require('./state/IdleState');
const CashDispenser  = require('./model/CashDispenser');

class ATM {
  /**
   * @param {number} totalCash - initial cash loaded in the ATM
   */
  constructor(totalCash) {
    this.atmState       = new IdleState();      // always starts idle
    this.cashDispenser  = new CashDispenser(totalCash);
    this.currentCard    = null;
  }

  // ─── Called by states to switch state ─────────────────────────────────

  setATMState(newState) {
    this.atmState = newState;
  }

  getATMState() {
    return this.atmState.constructor.name;  // useful for printing
  }

  // ─── Card management (used by states) ─────────────────────────────────

  setCard(card)    { this.currentCard = card; }
  getCard()        { return this.currentCard; }

  // ─── CashDispenser access (used by PinVerifiedState) ──────────────────

  getCashDispenser() { return this.cashDispenser; }

  // ─── Public ATM actions — ALL delegated to current state ──────────────

  /**
   * Customer inserts their card
   * @param {Card} card
   */
  insertCard(card) {
    this.atmState.insertCard(this, card);
  }

  /**
   * Customer enters PIN — verified against account
   * @param {Account} account
   * @param {string}  enteredPin
   */
  authenticatePIN(account, enteredPin) {
    this.atmState.authenticatePIN(this, account, enteredPin);
  }

  /**
   * Customer requests a cash withdrawal
   * @param {Account} account
   * @param {number}  amount
   */
  withdraw(account, amount) {
    this.atmState.withdraw(this, account, amount);
  }

  /**
   * Customer presses the eject/cancel button
   */
  ejectCard() {
    this.atmState.ejectCard(this);
  }
}

module.exports = ATM;