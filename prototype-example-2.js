function Bicycle(speed, gear, tirePressure) {
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflantTires = function() {
        tirePressure+=3;
    }
}

var hero = new Bicycle(21, 2, 28);
console.dir(hero); 

