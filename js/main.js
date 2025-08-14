'use strict';


var x = 0;

while (x <= 10) {
    console.log(x);
    x++;
}

console.log("**********************************************");

var y = 0;

do {
    console.log(y);
    y++;
} while (y <= 10);

console.log("**********************************************");

for (var z = 1; z <= 10; z += 2) {
    console.log(z);
}

console.log("**********************************************");

console.log(x)
console.log(y)
console.log(z)



var persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 35 }
];


console.log("Hello (name) your age is (age)");


console.log("**********************************************");


for (var t = 0; t < 10; t++) {
    if (t === 7) break;
    console.log(t)
}
