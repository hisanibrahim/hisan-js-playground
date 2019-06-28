var a = 10000; 

// wait for 10 seconds

var print = function () {
    console.log("I am printed after "+ a + " milli seconds.");
};

setTimeout(print, a)
