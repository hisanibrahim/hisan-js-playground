var x = 5;

function foo() {
    x = 44;
    console.log(x);
}

foo();
console.log(x);

console.log('--------------------');

if(true) {
    var scoped = 5;
}
console.log(scoped);

console.log('--------------------');

function doSomethingWithLet() {
    let l = 'No, Its me!';
    if(true){
        let l = 'Hey! I am stored in variable l';
        console.log(l);
    }
    console.log(l);
}

doSomethingWithLet();