class NearestSpotStrategy{
    getSpot(parkingFloors,vehicleType){
        for(const floor of parkingFloors){
            const spot = floor.getAvailableSpot(vehicleType);
            if(spot) return {spot,floor};
        }
        return null;

    }

}
module.exports =NearestSpotStrategy;
