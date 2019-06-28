console.log('----------Data Encapsulation---------');

(function () {
    var foo;
    foo = 0;
    function MyClass() {
        foo += 1;
    }
    MyClass.prototype = {
        howMany: function() {
            return foo;
        }
    };
    //window.MyClass = MyClass;
}());


console.log('--------Higher Order Functions-------');

// Return a list of all albums with atleast x copies sold

function bestSellingAlbum(x) {
    return albumList.filter(
        function (album) { return album.sales >= x; }
    );
}

const bestSellingAlbums = (x) => 
albumList.filter(album => album.sales >= x)

console.log(bestSellingAlbums);
console.dir(bestSellingAlbums);


console.log('---Working with object-oriented programming---');

function count () {
    var x = 0;
    return {
        increment: function() { ++x; },
        decrement: function() { --x; },
        get: function() { return x; },
        reset: function() { x = 0; }
    }
}

const operations = count();
console.dir(operations);

const inc = operations.increment(5);
console.log(inc);