// global objects stores global variables
var a = 10; 

function display() {
    console.log(a);
}
display();
var def = "Hello";
//In browser global object is 'window object'

function my() {
    console.log("This function can be found in window object");
}