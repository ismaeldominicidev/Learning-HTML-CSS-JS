// * Function * \\
function countCharacter(name) {
    let nameSimple = name.replaceAll(" ", "").toLowerCase()
    totalLetter = 0
    for (let i = 0; i < nameSimple.length; i++) {
        totalLetter += 1
    }
    console.log(totalLetter)
}

countCharacter("Hola, caballero")
countCharacter("!La vida del pobre!")
countCharacter("Buenas tardes, Sir?")
countCharacter("Vamos a contar, 12345678")

// * Anonymous function * \\
const numMin = function (numbers) {
    let temp = numbers[0]
    for (let number of numbers) {
        if (temp > number) {
            temp = number
        }
    }
    return temp
}

let numbers = [23, 4, 22, 7, 6, 54, 42, 1, 4, 5]

console.log(numMin(numbers))

// * Arrow function * \\
const arrow = (name) => console.log(`Hello, ${name}`)
arrow("Ismael Dominici")

// * Multiple parameters * \\
function sum(x = 0, y = 0) {
    return x + y
}

console.log(sum()) // 0
console.log(sum(5)) // 5
console.log(sum(5, 3)) // 8

// * Nested function * \\
function extern (num) {
    console.log("External function")
    function intern() {
        let intern = "Internal function"
        return intern
    }
    if (num === 1) {console.log(intern())}
}

extern(1)

// * Superior function * \\
function sup(func, param) {
    func(param)
}

sup(arrow, "Superior function")

// * forEach * \\
let array = [1, 2, 3, 4]
let set = new Set([1, 2, 3, 4])
let map = new Map([[1, 1], [2, 2], [3, 3], [4, 4]])

array.forEach((values) => console.log(values))
set.forEach(function (values) {
    console.log(values)
})
map.forEach(function (values) {
    console.log(values * 5)
})