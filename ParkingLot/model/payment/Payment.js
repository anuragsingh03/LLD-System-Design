class Payment {
  constructor(amount) {
    this.amount = amount;
    this.paymentStatus = "PENDING";
  }

  initiatePayment() {
    //must implement initiatePayment
  }
}

module.exports = Payment;
