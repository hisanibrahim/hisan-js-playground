console.log("plant corn");

setTimeout(function () {
    console.log("water plant")
}, 3000);

console.log("add fertilizer");

/*

When a function simply accepts another function as an argument, 
this contained function is known as a callback function

*/

const list = ['man', 'woman'];

const newList = list.map(function (item) {
    return item + ' kind';
});

console.log(newList);

// Naming callback functions

function greeting(name) {
    console.log("Hello! " + name);
}

function welcome(first, last, callback) {
    fullName = first + ' ' + last;
    callback(fullName);
}

welcome('Hisan', 'Ibrahim', greeting);

/*

Note: The callback function is not run unless called by its containing function, 
it is called back. Hence, the term call back function

*/

/*
Callback functions are useful for short asynchronous operations.
When working with large sets, this is not considered best practice. 
Because of this challenge, Promises were introduced to simplify deferred activities.
*/

//Promises

/*

Promises have three states:

    Pending: This is the initial state of the Promise before an operation begins
    Fulfilled: This means the specified operation was completed
    Rejected: The operation did not complete; an error value is usually thrown

*/

const weather = true;
const date = new Promise(function(resolve, reject) {
    if(weather) {
        const dateDetails = {
            name: 'Chakkarapanthal',
            location: 'Near CreatNlrn',
            table: 2,
        }
        resolve(dateDetails);
    } else {
        reject(new Error('Bad weather, No date!!'));
    }
});

console.dir(date);

//Chaining Promises

const orderUber = function(dateDetails) {
    const message = 'Get me an Uber to ' + dateDetails.location ;
    return Promise.resolve(message);
}

//async 

// const orderUber = async function(dateDetails) {
//     return 'Get me an Uber to ' + dateDetails.location ;
// }


//  Using Promises

date

.then(orderUber)
.then(function(done) {
    console.log('we are going on a date');
    console.log(done);
})
.catch(function(error) {
    console.log(error.message);
});

// can also add in a function

/* const myDate = function () {
    date
        .then(orderUber)
        .then(function (done) {
            console.log('we are going on a date');
            console.log(done);
        })
        .catch(function (error) {
            console.log(error.message);
        })
}

myDate();

*/

//Aysnc and await

/*
An async function is a modification to the syntax used in writing promises. 
You can call it syntactic sugar over promises. 
It only makes writing promises easier.

An async function returns a promise -- 
if the function returns a value, 
the promise will be resolved with the value, 
but if the async function throws an error, 
the promise is rejected with that value. 
*/


// Resolve in Promise Format
const you = function yourBike() {
    return Promise.resolve('2019 Royal Enfield Interceptor')
}

// Resolve in Async Format
const my = async function myBike() {
    return '2015 Suzuki Gixxer'
}

// Reject in Promise Format
function fee() {
    return Promise.reject(25);
}

// Reject in Async Format
async function foo() {
    throw 25;
}

//Await

/*

Await is only used with an async function. 
The await keyword is used in an async function 
to ensure that all promises returned in the async function are synchronized, 
ie. they wait for each other.

*/

const currentDate = '30 June 2019';
const serviceDate = '5 July 2019';
const slotFree = true;

const bikeService = new Promise(function (resolve, reject) {
    if(slotFree) {
        const bookedDetails = {
            date: currentDate,
            serviceDate: serviceDate,
        };
        resolve(bookedDetails);
    } else {
        reject(new Error('No slots available for that date'));
    }
});

async function myBikeService() {
    try {
        let bookedDetails = await bikeService;
        console.log(bookedDetails);
    }
    catch(error) {
        console.log(error.message);
    }
}

(async () => { await myBikeService(); }) ();