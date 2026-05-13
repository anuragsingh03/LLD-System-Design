const ParkingSpot = require("./ParkingSpot");
const ParkingSpotType = require("./ParkingSpotType");

class BikeSpot extends ParkingSpot {
  constructor(spotId) {
    super(spotId, ParkingSpotType.BIKE);
  }
}
module.exports = BikeSpot;
