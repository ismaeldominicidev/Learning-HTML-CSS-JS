// * String Writing *
let userName = "Ismael Dominici M"
let greeting = "Hey " + userName + ", how are you?" // concatenation
console.log(greeting)
greeting = `Hey ${userName}, how are you?` // Interpolation //$ use ` inverted quotation mark
let stringMultiLine = `This is a
                            multi-line text`
console.log(stringMultiLine)
    
// * Length *
console.log(greeting.length)

// * String Indexing *
console.log(greeting[4]) // I
console.log(greeting[0]) // H | First position
console.log(greeting[35]) // Undefined | last character is 34
console.log(greeting[-1]) // undefined | in JS not used directly [-1]
console.log(greeting.at(-1)) //| ? | So give the last character .at
console.log(greeting[greeting.length - 1]) //| ? | Old way of getting the last character

// * String Methods *
console.log(greeting.toUpperCase()) // Convert to UpperCase.
console.log(greeting.toLowerCase()) // Convert to LowerCase.
console.log(greeting.indexOf("Ismael")) // 4 | Locates the position of a character, word or phrase. 
console.log(greeting.indexOf("Rafael")) // -1 | Position not found.
console.log(greeting.includes("Ismael")) // true | Search if the word is found.
console.log(greeting.includes("Rafael")) // false
console.log(greeting.slice(4, 10)) // Ismael | take a piece
console.log(greeting.replace("M", "Moronta")) // Replaces character with other character        