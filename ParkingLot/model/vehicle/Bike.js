const Vehicle = require("./Vehicle");
const VehicleType = require("./VehicleType");

class Bike extends Vehicle {
  constructor(vehicleNumber) {
    super(vehicleNumber, VehicleType.BIKE);
  }
}

module.exports = Bike;
