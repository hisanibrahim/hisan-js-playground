// https://youtu.be/NmpHR95tZzQ?list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u


function CreateStudent(name, age, gender) {
    //var this ={};
    this.name = name;
    this.age = age;
    this.gender = gender;
    //return this;
}

const hisan = new CreateStudent('Hisan', 22, 'Male');
const mobin = new CreateStudent('Mobin', 25, 'Male');
const varsha = new CreateStudent('Varsha', 24, 'Female');

console.log(hisan);
console.log(mobin);
console.log(varsha);


//https://youtu.be/hKJ6b-Z5Z3U?list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u

function Bicycle(speed, gear, tirePressure) {
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflantTires = function() {
        this.tirePressure+=3;
    }
}

var hero = new Bicycle(20, 3, 28);
console.log(hero);
hero.inflantTires();
console.log(hero);

function Mechanic(name) {
    this.name = name;
}

let Ramettan = new Mechanic('Ramettan');
Ramettan.inflantTires = hero.inflantTires;

console.log(Ramettan);

Ramettan.inflantTires.call(hero);

console.log(hero);
console.log(Ramettan);

