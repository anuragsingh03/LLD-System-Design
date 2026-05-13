const ParkingSpot = require("./ParkingSpot");
const ParkingSpotType = require("./ParkingSpotType");

class CarSpot extends ParkingSpot {
  constructor(spotId) {
    super(spotId, ParkingSpotType.CAR);
  }
}
module.exports = CarSpot;
