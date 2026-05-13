const Vehicle = require("./Vehicle");
const VehicleType = require("./VehicleType");

class Car extends Vehicle {
  constructor(vehicleNumber) {
    super(vehicleNumber, VehicleType.CAR);
  }
}

module.exports = Car;
