// var i;

// var print = function() {
//     console.log(i);
// };

// for(i=0; i<10; i++) {
//     setTimeout(print, 1000);
// }


var i ;

for(i = 0; i < 10; i++) {
    (function(currentValueOfI) {
    setTimeout(function() {
        console.log(currentValueOfI);
    }, 1000)
})(i);
}