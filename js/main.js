'use strict';

var student = ["John Doe", 20, "Computer Science", undefined, null, ["Math", "Physics"], { name: "John", age: 20 }, true, 'test'];

// student[0] = "John Doe"
// student[1] = 20
// student[2] = "Computer Science"

console.log(student)
console.log(student[0])
console.log(student[4])
console.log(student[5][0])
console.log(student[6].age)
console.log(student[6]["name"])
console.log(student.length)
console.log(student[7])
console.log(student[student.length - 1])
console.log(student.at(-1))
console.log(student[10])

console.log("*********************************************")
///////////////////////////////////////////////////////////

var x = 5

if (x !== '5') {
    console.log("YES");
}
else {

    console.log("NO")
}


var y = 12;


console.log(y);
console.log(y--);
console.log(++y);


console.log(y % 3)

y += 15;
console.log(y)

console.log(y %= 3)
console.log(y)


if (!true) {
    console.log("This is true");
}
// 50 : 65  Pass
// 65 : 75 Good
// 75 : 85 Very Good
// 85 : 100 Excellent

function grade(num) {

    if (num >= 0) {
        if (num <= 100) {
            if (num >= 85) console.log("Excellent");
            else if (num >= 75) console.log("Very Good");
            else if (num >= 65) console.log("Good");
            else if (num >= 50) console.log("Pass");
            else console.log("Fail");
        }
    }
    else { }
}


grade(90);


var t = 1
if (t > 5 && t < 15) {
    console.log("t is between 5 and 15");
}


if (t > 5 || t < 15) {
    console.log("t is either greater than 5 or less than 15");
}


console.log("test" && 0 && "YES")
// AND returns the first falsy value or the last truthy value



console.log("" || NaN || null)
// OR return the first truthy value or the last falsy value


try {
    console.lo(object)
} catch (error) {
    console.error("Dev ERROR : " + error.message)
} finally {
    console.log("This is the finally block, it always executes")
}

var t = 1;

switch (t) {
    case 2:
    case 1:
        console.log("t equal 1 OR 2");
        break;
    case 3:
        console.log("t equal 3");
        break;
    default:
        console.log("t is not equal to 1, 2, or 3");
}


function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Invalid input: width and height must be numbers");
    }
    else return width * height;
}

// var width = +prompt("Enter width:");
// var height = +prompt("Enter height:");

try {
    console.log(getRectArea(45, 10));
} catch (error) {
    console.error(error);
}



p = 8;

console.log(p);
