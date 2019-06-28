// In JavaScript, hoisting is a term used to 
// denote the movement of variable and function 
// declarations to the top of their scope during 
// execution of the scope. 

console.log(x);
var x = 3;

function letHoisting() { 
    let l = 'I am declared before log() called';
    console.log(l);
    // let l = 'I am declared after log() called';
}

letHoisting();

// Hoisting takes place when declaring variables using let 
// but since the variables are not accessible before its 
// initialization, it is assumed that hoisting doesn’t occur. 
// This is known as the Temporary Dead Zone


//----------------------------
// let s = 'outer scope';
// (function() {
//     console.log(s);
//     let s = 'inner scope';
// }());
//-----------------------------


if(true){
    const c = 'Hello';
    console.log(c);
}
// console.log(c)