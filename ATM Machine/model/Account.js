/**
 * Equivalent of Java class Account
 * Holds balance linked to a card. PIN is stored here for verification.
 */
class Account {
  constructor(accountNumber, pin, balance) {
    this.accountNumber = accountNumber;
    this.pin           = pin;
    this.balance       = balance;
  }
  getBalance()           { return this.balance; }
  getPin()               { return this.pin; }
  getAccountNumber()     { return this.accountNumber; }
  deductBalance(amount)  { this.balance -= amount; }
}
module.exports = Account;