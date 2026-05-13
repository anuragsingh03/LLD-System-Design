class ParkingSpot {
  constructor(spotId, spotType) {
    this.spotId = spotId;
    this.spotType = spotType;
    this.isEmpty = true;
    this.vehicle = null;
  }
  park(vehicle) {
    this.isEmpty = false;
    this.vehicle = vehicle;
  }
  removeVehicle() {
    this.vehicle = null;
    this.isEmpty = true;
  }
}
module.exports = ParkingSpot;
