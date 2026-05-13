class Vehicle {
  constructor(vehicleNumber, vehicleType) {
    this.vehicleNumber = vehicleNumber;
    this.vehicleType = vehicleType;
    this.ticket = null;
  }
  assignTicket(ticket) {
    this.ticket = ticket;
  }
}
module.exports = Vehicle;
