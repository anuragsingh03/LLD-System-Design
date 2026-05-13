const ParkingSpot = require("./ParkingSpot");
const ParkingSpotType = require("./ParkingSpotType");

class TruckSpot extends ParkingSpot {
  constructor(spotId) {
    super(spotId, ParkingSpotType.TRUCK);
  }
}
module.exports = TruckSpot;
