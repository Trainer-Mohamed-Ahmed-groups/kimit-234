"use strict";
console.log(x)

var x = 1;

function ok() {
    let y = 5
    console.log(y)
}

ok()
////////////////////////////////////////
{
    var z = 10;
}
console.log(z)


for (let index = 0; index < 10; index++) {
    console.log(index)
}
//////////////////////////////////////

var t = 10;
console.log(t)


var t = 20;
console.log(t)

//////////////////////////////////////
test()

function test() { console.log("test") }


var test = function () { console.log("test") }



//////////////////////////////////////


console.log("5e" * 8);
console.log("5" + 8); // 58


console.log(parseInt('45.32'))
console.log(parseFloat('45.32'))
