class Ticket {
  constructor(ticketId, entryTime, vehicle, parkingSpot, parkingFloor) {
    this.ticketId = ticketId;
    this.entryTime = entryTime;
    this.vehicle = vehicle;
    this.parkingSpot = parkingSpot;
    this.parkingFloor = parkingFloor;
    this.exitTime = null;
    this.totalCharge = 0;
    this.payment = null;
  }
}
module.exports = Ticket;
