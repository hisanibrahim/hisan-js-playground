
//compilation steps examines variable declearations

var a = 10; //LHS register in global object and not care about RHS
var b = 20; //LHS register in global object and not care about RHS

console.log(a+b); //ignore bcoz no var declerations



//eg 2

var x = 10; //LHS register in global object and not care about RHS

function myFn() { // function name also register in global object
    var y = 50;   // It is myFn scope so register inside myFn scope not in global object 
    var z = 60;   // It is myFn scope so register inside myFn scope not in global object
    console.log(z-y);
}

myFn();


//eg 3

var name = "Hisan"; // 'name' register in global scope

function welcome(name) { // function 'welcome' register in global scope, 
    //and argument is also create a variable 
    //argument 'name' is register in welcome function scope
    console.log("Hi, " + name);
}

welcome(name);
