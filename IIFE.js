
function add() {
    var a = 10;
    var b = 20;
    console.log(a + b);
}
add();

// Immediately Invoked Function Expression (IIFE)
(function () {
    var a = 10;
    var b = 20;
    console.log(a + b);
})();

//Benefits of IIFE

//No access to a and b variable