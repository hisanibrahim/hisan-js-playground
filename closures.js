console.log('----------No closure----------------');

function outside() {
    var height = 10;
    function inside() {
        console.log('yout height '+height);
    }
    inside();
}
outside();


console.log('-----------Closure example 1---------------');

function outer() {
    var normalVariable = 1;

    var functionInsideOuter = function() {
        console.log('Function inside outer executing');
        console.log(normalVariable);
    };

    return functionInsideOuter;
}

var innerFunction = outer();
innerFunction();

console.log('-----------Closure example 2---------------');

var a = 10;

function outer () {
    var b = 20;

    var inner = function() {
        a++;
        b++;
        console.log(a);
        console.log(b);
    };
    return inner;
}

var innerFn1 = outer();
innerFn1(); //a is 11 , b is 21
var innerFn2 = outer(); // creating a new copy of varibale b
innerFn2(); //a is 12 , b is 21
var innerFn3 = outer();
innerFn3(); //a is 13 , b is 21



