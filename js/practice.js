"use strict";


for (let i = 65; i <= 122; i++) {
    if (i > 90 && i < 97) continue;
    console.log(String.fromCharCode(i))
}



var text = "Js$is$a$good$language";
console.log("-".repeat(20))


var newText = "        I      m     test    "
let result = "";
let newResult = [];

for (let index = 0; index < newText.length; index++) {
    const element = newText[index];
    // if (element !== ' ') result += element
    if (element !== ' ') {
        if (newText[index - 1] === ' ') { newResult.push(element.toUpperCase()) }
        else newResult.push(element)
    }
}

// console.log(newResult)
console.log(newResult)
console.log(newResult.join(' '))
console.log(newText.split(" ").join(" "))


var people = ["Mohamed", "Ibrahim", "Ali", "Sayed"]
console.log(people[Math.round(Math.random() * 3)])
