const simpleArray = ['first element', 'Hisan', 22, 'last element'];

const arrayWithObject = [
    'Hisan Ibrahim',
    { working: true, married: false },
    22
];

//Array constructor

const ArrayConstructor1 = new Array('item1', 2, false);
console.log(ArrayConstructor1);

const ArrayConstructor2 = new Array(10); //created 10 emtyy slots
console.log(ArrayConstructor2);

//Accessing arrays

console.log(ArrayConstructor1[0]);
console.log(ArrayConstructor1[1]);
console.log(ArrayConstructor1[2]);

console.log('--------------------------');

//Array Methods

console.log(simpleArray.length);

console.log(simpleArray);
console.log(simpleArray.pop()); //(Mutator Method)
//removes the last element from an array and returns that element
console.log(simpleArray);

console.log('copy : ' + simpleArray.slice()); //(Accessor Method)
//returns a shallow copy of a portion of an array into a new array

console.log(simpleArray.shift()); //(Mutator Method)
//removes the first element from an array and returns that element
console.log(simpleArray);

console.log(simpleArray.unshift('new element adding to first')); //(Mutator Method) 
//adds one or more elements to the beginning of an array and returns the new length of the array
console.log(simpleArray);

console.log(simpleArray.push('added last a new element')); //(Mutator Method)
//adds a specified element to an array and returns the modified array.
console.log(simpleArray);

