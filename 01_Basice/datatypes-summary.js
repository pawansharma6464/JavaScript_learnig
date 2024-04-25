// Primitive

// 7 type : String, Number, Bollearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggendIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234567898765n


// Reference (Non primitive)

// Array, Objects, Function

const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "pawan",
    age: 20,
}

const myFunction = function(){
    console.log("pawan")
}

console.log(typeof myFunction)
