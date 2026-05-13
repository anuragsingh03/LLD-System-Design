const Payment = require('./Payment');
class CashPayment extends Payment{

    initiatePayment(){
        console.log(`cash payment of ${this.amount} initiate`);
        this.paymentStatus = 'DONE';
    }
}

module.exports = CashPayment;