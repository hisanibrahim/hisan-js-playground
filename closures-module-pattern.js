// The properties of person object is available everywhere
//Js don't have private and public

// var person = {
//     "firstName": "Hisan",
//     "lastName": "Ibrahim",
//     "getFirstName": function() {
//         return this.firstName;
//     },
//     "getLastName": function() {
//         return this.lastName;
//     },
// };

//we can workout private variables using scope and closures

function createPerson() {
    var firstName;
    var lastName;

    var person = {
        'getFirstName': function() {
            return firstName;
        },
        'getLastName': function() {
            return lastName;
        },
        'setFirstName': function(name) {
            firstName = name;
        },
        'setLastName': function(name) {
            lastName = name;
        }
    }
    return person;
}

var student = createPerson();

console.log(student.getFirstName());
student.setFirstName('Hisan');
console.log(student.getFirstName());
console.log(firstName);
console.log(lastName);