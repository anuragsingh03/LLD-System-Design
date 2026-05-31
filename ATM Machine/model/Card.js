/**
 * Equivalent of Java class Card
 * Represents a bank card inserted into the ATM.
 */
class Card {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }
  getCardNumber() { return this.cardNumber; }
  setCardNumber(n) { this.cardNumber = n; }
}
module.exports = Card;