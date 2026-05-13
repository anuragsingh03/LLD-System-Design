const ParkingLotSystem = require('./ParkingLotSystem');
const ParkingFloor = require('./ParkingFloor');
const CarSpot = require('./model/spot/CarSpot');
const BikeSpot = require('./model/spot/BikeSpot');
const TruckSpot = require('./model/spot/TruckSpot');
const Car = require('./model/vehicle/Car');
const Bike = require('./model/vehicle/Bike');
const CashPayment = require('./model/payment/CashPayment');
const UpiPayment = require('./model/payment/UpiPayment');

const lot = new ParkingLotSystem();

// Setup floors
const floor1 = new ParkingFloor(1);
floor1.addSpot(new CarSpot('C1')); 
floor1.addSpot(new CarSpot('C2'));
floor1.addSpot(new BikeSpot('B1')); 
floor1.addSpot(new TruckSpot('T1'));
lot.addFloor(floor1);

const floor2 = new ParkingFloor(2);
floor2.addSpot(new CarSpot('C3')); 
floor2.addSpot(new BikeSpot('B2'));
lot.addFloor(floor2);

lot.displayAvailability();

// Park vehicles
const car1 = new Car('UP-32-AB-1234');
const bike1 = new Bike('UP-32-XY-5678');

const ticket1 = lot.parkVehicle(car1);
const ticket2 = lot.parkVehicle(bike1);

lot.displayAvailability();

// Unpark
lot.unparkVehicle(ticket1, new CashPayment(0));
lot.unparkVehicle(ticket2, new UpiPayment(0));

lot.displayAvailability();