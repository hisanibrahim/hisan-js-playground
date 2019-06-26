// https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/


// Prototype chaining & Inheritance


function Vehicle(vehicleType) {
    //Vehicle Constructor
    this.vehicleType = vehicleType;
}

Vehicle.prototype.blowHorn = function () {
    console.log('Honk! Honk!');
}
function Bus(make) {
    //Bus Constructor
    Vehicle.call(this, "Bus");
    this.make = make;
}

Bus.prototype = Object.create(Vehicle.prototype);
//Make Bus constructor inherit properties from Vehicle Prototype Object

Bus.prototype.noOfWheels = 6; //Let's assume all buses have 6 wheels

Bus.prototype.accelerator = function() {
    console.log('Accelerating Bus');
    //Bus accelerator
}
Bus.prototype.brake = function() {
    console.log('Braking Bus');
    //Bus braking
}

function Car(make) {
    Vehicle.call(this, "Car");
    this.make = make;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.noOfWheels = 4;

Car.prototype.accelerator = function() {
    console.log('Accelerating Car');
}
Car.prototype.brake = function() {
    console.log('Braking Car');
}

function Bike(make) {
    Vehicle.call(this, "Bike");
    this.make = make;
}

Bike.prototype = Object.create(Vehicle.prototype);

Bike.prototype.noOfWheels = 2;

Bike.prototype.accelerator = function() {
    console.log('Accelerating Bike');
}
Bike.prototype.brake = function() {
    console.log('Braking Bike');
}

var myBus = new Bus('Ashok Leyland');
var myCar = new Car('Audi');
var myBike = new Bike('Ducati');

console.dir(myBus);
myBike.accelerator();