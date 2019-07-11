var a = 10;

function outer() {
    var b = a;
    console.log(b);
    function inner(){
        var b = 20;
        var c = b;
        console.log(c);
    }
    inner();
}

outer();