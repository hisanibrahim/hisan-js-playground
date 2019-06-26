// https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/

// JavaScript classes, introduced in ECMAScript 2015, 
// are primarily syntactical sugar over JavaScript’s 
// existing prototype-based inheritance. The class syntax 
// does not introduce a new object-oriented inheritance 
// model to JavaScript.


// prototype.js


// Classes in JavaScript will provide better syntax to 
// achieve what we did above in a much cleaner way. 

class Myclass {
    constructor(firstName) {
        this.name = firstName;
    }
    tellMyName = () => {
        console.log(this.firstName);
    }
    lastName = 'Ibrahim';
    static welcome() {
        console.log('Hello World');
    }
}

Myclass.welcome();
const myObj = new Myclass('Hisan');
//myObj.welcome();

// Vehicle Example

class Vehicle {
    constructor(type) {
        this.vehicleType = type;
    }
    blowHorn() {
        console.log('Honk! Honk! Honk!');
    }
}

class Bus extends Vehicle {
    constructor(make) {
        super('Bus');
        this.make = make;
    }
    accelerator() {
        console.log('Accelerating Bus');
    }
    break() {
        console.log('Braking Bus');
    }
}
Bus.prototype.noOfWheels = 6;

const myBus = new Bus('Tata');