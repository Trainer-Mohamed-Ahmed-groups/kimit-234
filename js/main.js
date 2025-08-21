'use strict';
var fruits = ["Mongo", "Banana", "apple", "Strawberry"],
    numbers = [10, 20, 30, 40, 50, 60, 70]


console.log(fruits)
console.log(numbers)
console.log(fruits.length)
console.log(fruits.at(2))


console.log(fruits.join(' * '))


console.log(numbers.some(function (number) { return number > 25 }))
console.log(numbers.some((number) => number > 25))
console.log(numbers.some(checkAges))


function checkAges(age) {
    return age > 25
}

console.log(numbers.every(number => number > 25))

// console.log(fruits.some(sample => sample.startsWith('A')));

console.log("*".repeat(20))

console.log(numbers.find(number => number > 20))
console.log(numbers.findIndex(number => number > 20))


console.log(numbers.filter(number => number > 20))
console.log("*".repeat(20))


var test = numbers.map(number => {
    if (number > 20) return "+"
    else return "-"
})

var test2 = numbers.forEach(number => console.log(number))


console.log(test)
console.log(test2)
console.log(numbers)


console.log(fruits.slice(1, 2))
console.log(fruits.slice(1))
console.log(fruits.slice(0, 2))

console.log("*".repeat(20))

// console.log(numbers.fill(33, 3, 5))

// numbers.push(100)
// numbers.pop()

// numbers.shift()
// numbers.unshift('test')

// console.log(numbers.splice(1, 3))
console.log(numbers.splice(1, 3, 'new Item', 'new Item2', 'new Item3'))
// console.log(numbers.toSpliced(1, 3))

console.log(numbers)


console.log(fruits.sort())




var numbers2 = [91, 21, 201, 10, 101]
console.log(numbers2.sort((a, b) => a - b))

let i = 1
function sayHello() {
    console.log("Hello : " + i)
    i++
}


var myInterval = setInterval(sayHello, 500)
// var myTimeout = setTimeout(sayHello, 5000)


function stop() {
    clearInterval(myInterval)
    // clearInterval(myTimeout)
}


var myDate = new Date("25 Mar 2015");

console.log(myDate)
