const Ticket = require('./model/Ticket');
const NearestSpotStrategy = require('./strategy/NearestSpotStrategy');

class ParkingLotSystem {
  constructor() {
    if (ParkingLotSystem._instance) return ParkingLotSystem._instance;
    this.parkingLotId = 'PL-01';
    this.floors = [];
    this.strategy = new NearestSpotStrategy();
    this._ticketCounter = 1;
    ParkingLotSystem._instance = this;
  }

  addFloor(floor) { this.floors.push(floor); }

  parkVehicle(vehicle) {
    const result = this.strategy.getSpot(this.floors, vehicle.vehicleType);
    if (!result) {
      console.log(`No spot available for ${vehicle.vehicleType}`);
      return null;
    }
    const { spot, floor } = result;
    spot.park(vehicle);

    const ticket = new Ticket(
      `TKT-${this._ticketCounter++}`,
      new Date(),
      vehicle,
      spot,
      floor
    );
    vehicle.assignTicket(ticket);
    console.log(`Vehicle ${vehicle.vehicleNumber} parked. Ticket: ${ticket.ticketId}`);
    return ticket;
  }

  unparkVehicle(ticket, payment) {
    const exitTime = new Date();
    const hours = Math.ceil(
      (exitTime - ticket.entryTime) / (1000 * 60 * 60)
    ) || 1;

    const rates = { CAR: 50, BIKE: 20, TRUCK: 100 };
    const charge = hours * rates[ticket.vehicle.vehicleType];

    ticket.exitTime = exitTime;
    ticket.totalCharge = charge;
    ticket.payment = payment;
    payment.amount = charge;
    payment.initiatePayment();

    ticket.parkingSpot.removeVehicle();
    console.log(`Vehicle ${ticket.vehicle.vehicleNumber} unparked. Charge: ₹${charge}`);
  }

  displayAvailability() {
    console.log(`\n=== Parking Lot: ${this.parkingLotId} ===`);
    this.floors.forEach(f => f.displayAvailability());
  }
}

module.exports = ParkingLotSystem;