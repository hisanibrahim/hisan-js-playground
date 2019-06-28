//object decleration

const myObject = { //object can contain
    name: 'Hisan Ibrahim', //properties
    age: 22,
    address: { city: 'Kakkanad', pin: 682030, landmark: null }, // Nested objects
    mob: 9961996609,
    married: false,
    getData: function() { //methods or functions
        return("Name: "+ this.name + "\nAddress: " + this.address.city);
    }
};

let print = myObject.getData();
console.log(print);

//Everything is an Object

const myMessage = " I am just a string";
console.log(myMessage);
let msg = myMessage.toUpperCase() + " but I'm object";
console.log(msg);

//What javascript sees when  

const simpleWay = "look at me go";

const internalWay = String('look at me go')

console.log(simpleWay == internalWay);

// Accessing object props

let marritalStatus = myObject.married;
console.log(marritalStatus);

let mobileNumber = myObject['mob'];
console.log(mobileNumber);