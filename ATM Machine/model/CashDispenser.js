/**
 * Equivalent of Java class CashDispenser
 * Manages the physical cash inside the ATM.
 * Used by ATM context and PinVerifiedState to dispense cash.
 */
class CashDispenser {
  constructor(totalCash) {
    this.cashAvailable = totalCash;
  }
  hasCash(amount) {
    return this.cashAvailable >= amount;
  }
  dispenseCash(amount) {
    if (!this.hasCash(amount)) {
      console.log('  [CashDispenser] Insufficient cash in machine.');
      return false;
    }
    this.cashAvailable -= amount;
    console.log(`  [CashDispenser] Dispensing Rs.${amount}. Remaining in machine: Rs.${this.cashAvailable}`);
    return true;
  }
  getCashAvailable() { return this.cashAvailable; }
}
module.exports = CashDispenser;