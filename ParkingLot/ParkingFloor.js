class ParkingFloor {
  constructor(floorId) {
    this.floorId = floorId;
    this.spots = { CAR: [], BIKE: [], TRUCK: [] };
  }
  addSpot(spot) {
    this.spots[spot.spotType].push(spot);
  }
  getAvailableSpot(vehicleType) {
    return this.spots[vehicleType].find((s) => s.isEmpty) || null;
  }
  displayAvailability() {
    for (const [type, spots] of Object.entries(this.spots)) {
      const free = spots.filter((s) => s.isEmpty).length;
      console.log(
        ` Floor ${this.floorId} | ${type}: ${free}/${spots.length} free`,
      );
    }
  }
}
module.exports = ParkingFloor;
