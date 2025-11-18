// * for * \\
console.log("loop for")
for (let i = 0; i < 5; i++) {
    console.log(i)
}

const myArray = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < myArray.length; i++) {
    console.log(`Element: ${myArray[i]}`)
}

// * for of * \\ 
console.log("\nloop for of")
let myString = "Hello, gentleman"
let arrayNew = [12, "Ismael", true]
let mySet = new Set([18, "Ismael", true, 234324n])
let myMap = new Map([
    ["Name", "Ismael"],
    ["Hobbies", ["Programming", "Paint", "Music", "Barista"]],
    ["Age", 18],
    ["Working", false],
])

for (let i of myString) {
    console.log(i)
}  

for (let i of myArray) {
    console.log(i)
} 

for (let i of mySet) {
    console.log(i)
}

for (let i of myMap) {
    console.log(i)
}

// * while * \\
console.log("\nloop while")
i = 0
while (i < myArray.length) {
    console.log(`Element: ${myArray[i]}`)
    i++
}

// * do while * \\
console.log("\nloop do while")
i = 0
do {
    console.log(`Element: ${myArray[i]}`)
    i++
} while (i < 0)


// * continue & break * \\
console.log("\ncontinue & break")
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log(`Item ${i} Has been removed.`)
        continue
    } else if (i === 7) {
        console.log(`Item ${i} found.`)
        break
    }
    console.log(i)
}