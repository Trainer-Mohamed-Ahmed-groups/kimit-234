console.log("This is external")


var x = 10,
    y = 50,
    z = x + y;
console.log(z);


// " "
//  ' '
// ` `

// String
// var username = prompt("Please enter your name"),
//     lastName = "Omar",
//     userAge = 30;

// console.log("Hello " + username + " " + lastName + " your age " + userAge + " years old")
// console.log(`Hello ${username} ${lastName} your age ${userAge} years old`)

var isValid = true

console.log(isValid)

var t;
console.log(t)


console.log(document.getElementById('test'))




// Object

var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2015,
    color: "Red",
    isRunning: true,
    owner: undefined
}
car.isSold = true

console.log(car)

// Bracket notation
console.log(car['brand'])
// Dot notation
console.log(car.model)


var person = {
    name: "Ahmed",
    age: 30,
    location: {
        state: "Cairo",
        country: "Egypt"
    }
}
console.log(person)
console.log(person.location.country)
console.log(person['location']['country'])



// Functions

// Void function
function sayHello() {
    console.log("Hello")
}

// returning value function

var sayGoodbye = function () {
    return "Goodbye"
}

// Arrow function ()
var sayGoodMorning = () => { return "Good Morning" }
var sayGoodMorning = () => "Good Morning"

sayHello()
console.log(sayGoodbye() + " OK OK")
console.log(sayGoodMorning())



var sum = function (a = 0, b = 0) {
    return a + b
}


console.log(sum(5, 7))
console.log(sum(5))
console.log(sum())
console.log(sum('A'))



var multiply = function (a = 0, b = 0) {
    return a * b
}

console.log(multiply('a', 8))
