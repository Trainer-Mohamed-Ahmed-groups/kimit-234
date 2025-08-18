'use strict';


var jobTitle = "I am a frontend developeR and Frontend instructoR",
    username = "ALI";

console.log(jobTitle.concat(" This is " + username))
console.log(jobTitle.length)
console.log(username[2])
console.log(username.charAt(1))
console.log(username.charCodeAt(2))
console.log(String.fromCharCode(122))


console.log(jobTitle.startsWith('I'));
console.log(jobTitle.endsWith('I'));
console.log(jobTitle.includes('r'))
console.log(jobTitle.indexOf('r'))
console.log(jobTitle.indexOf('z')) // -1
console.log(jobTitle.lastIndexOf('r'))
console.log(jobTitle.lastIndexOf('z')) // -1


console.log(jobTitle.match(/r/ig))
console.log(jobTitle.match(/r/ig).length)


console.log("*".repeat(20))


console.log(jobTitle.replace(/front/ig, "back"))

console.log(jobTitle.search('a'))

console.log(jobTitle.split(' '))
console.log(jobTitle.split(' ').join("-"))


console.log(jobTitle.slice(2, 8))


console.log(jobTitle.substring(2, 8))
console.log(jobTitle.substr(2, 8))


console.log(jobTitle.toUpperCase())
console.log(jobTitle.toLocaleLowerCase())


var newText = "        I      m     test     "
console.log(newText)
console.log(newText.trimStart())
console.log(newText.trimEnd())
console.log(newText.trim())


// Math

console.log(Math.PI)
console.log(Math.abs(-8))
console.log(Math.abs(8))
console.log(Math.round(3.7))
console.log(Math.round(3.3))
console.log(Math.ceil(9.1))
console.log(Math.floor(9.9))


var myNumbers = [54, 4, 78, 52, 5, 78, 78, 7]
console.log(myNumbers)
console.log(...myNumbers)
console.log(Math.max(...myNumbers))
console.log(Math.min(...myNumbers))
console.log(Math.pow(2, 3))
console.log(Math.random() * 10)
console.log(Math.round(Math.random() * 10))
