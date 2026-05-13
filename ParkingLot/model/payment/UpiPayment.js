const Payment = require('./Payment');
class UpiPayment extends Payment{

    initiatePayment(){
        console.log(`Upi payment of ${this.amount} initiate`);
        this.paymentStatus = 'DONE';
    }
}

module.exports = UpiPayment;