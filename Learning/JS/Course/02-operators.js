let y = 5
let x = 5

// * Arithmetic Operators * //
console.log("Arithmetic Operators")
console.log(y + x) // Addition
console.log(y - x) // Subtract
console.log(y * x) // Multiplication
console.log(y / x) // Division
console.log(y ** x) // Exponent
console.log(y % x) // Module

y++ // Increase 
console.log(y)
x-- // Decrease
console.log(x)

// * Assignment Operators * //
console.log("\nAssignment Operators")
let i = 5 // Equal to
console.log(i += 5) // Addition and assign 
console.log(i -= 5) // Subtract and assign
console.log(i *= 5) // Multiplication  and assign
console.log(i /= 5) // Division and assign
console.log(i **= 5) // Exponent and assign
console.log(i %= 5) // Module and assign

// * Comparison Operators * //
console.log("\nComparison Operators")
x = 10, y = 5

console.log(x > y) // true | Greater than
console.log(x < y) // false | Less than
console.log(x >= y) // true | Greater than or equal to
console.log(x <= y) // false | Less than or equal to
console.log(x == y) // false | Equal to
console.log(x == "10", x == 10) // true & true | Equality by value ==
console.log(x === "10", x === 10) // false & true | Equality by identity ===
console.log(x != "10", x != 10, x != 5) // false & false & true | Distinct by value ==
console.log(x !== "10", x !== 10, x !== 5) // true & false & true | Distinct by identity ===

// * Logic Operators * //
console.log("\nLogic Operators")
x = 10, y = 5

// And (&&)
console.log("And (&&)") // Only true if both options are true
console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false
console.log(x > y && y < x) // true
console.log(x < y && y < x) // false
console.log(x > y && y > x) // false
console.log(x < y && y > x) // false

// Or (||)
console.log("\nOr (||)") // Only true if any options are true
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false
console.log(x > y || y < x) // true
console.log(x < y || y < x) // true
console.log(x > y || y > x) // true
console.log(x < y || y > x) // false

// Not (!)
console.log("\nNot (!)") // Change true to false and false to true
console.log(!true) // false
console.log(!false) // true
console.log(!(true && true)) // false
console.log(!(false || false)) // true
console.log(!(x > y)) // false
console.log(!(x < y)) // true

// Combined
console.log("\nCan be combined")
console.log((true || false) && true) // true
console.log((!false && true) && (true || false)) // true
console.log(!(true && (false || true) && (true || (false && true)))) // false

// * Ternary Operators * //
console.log("\nTernary Operators")
let isRaining = true
let message

isRaining ? message = "It's raining" : message = "It's not raining"
console.log(message) // It's raining

/* 
    * True or False by Default

    * Truthy
    - All numbers, positive or negative, except zero.
    - All strings, except empty.
    - Objects, include object empty
    - Functions
    - Symbols
    - The boolean true.

    * Falsy
    - 0, 0n (As BigInt).
    - Null, Undefined & NaN.
    - String empty
    - document.all
    - The boolean false.
*/       