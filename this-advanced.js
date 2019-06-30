
/* 
    Default (Global) binding rule.
    Implicit binding rule.
    Explicit binding rule
    Constructor calls with new
*/

console.log('\n---------1------------\n\n');

//    Default (Global) binding rule.

function printName() {
    //'use strict';
    console.log(this.name);
}
var name = 'Hello';
printName();

console.log('\n---------2------------\n\n');

//    Implicit binding rule.

var company = {
    companyName: 'CNL',
    printCompanyName : function printCompanyName() {
        console.log(this.companyName);
    }
};

var companyName = 'Hisanz';

company.printCompanyName();

var printCompanyNameAgain = company.printCompanyName;
printCompanyNameAgain();

console.log('\n---------3------------\n\n');

//    Explicit binding rule

printCompanyNameAgain.call(company); //You can explicitly manipulate the call site using call, apply, or bind.

const employee = {
    employeeName: 'Aravind',
    greeting: function greeting(wish, time) {
        console.log(wish + ' ' + this.employeeName + ', Good ' + time);
    }
};

employee.greeting('Hi', 'Morning'); //Implicit binding

let employeeGreeting = employee.greeting; 

employeeGreeting('Hello', 'Evening'); //globally binded, it is not refering employee object

//explicit binding
employeeGreeting.call(employee, 'Hey', 'Afternoon'); // call method 
employeeGreeting.apply(employee, ['Good', 'Move']);  // apply method

//bind method
let employeeGreetingBinded = employeeGreeting.bind(employee);
employeeGreetingBinded('Bye', 'Night'); 


//    Constructor calls with new

// Learnt in constructor-function-this.js