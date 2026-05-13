const Vehicle = require("./Vehicle");
const VehicleType = require("./VehicleType");

class Truck extends Vehicle {
  constructor(vehicleNumber) {
    super(vehicleNumber, VehicleType.TRUCK);
  }
}

module.exports = Truck;
