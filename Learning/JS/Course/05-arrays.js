let dataDeleted = []
let arrayNew = []
let arrayOld = []
let arrayNew2 = []

// * Writing Arrays * //
arrayNew = [12, "Ismael", true] // 12, Ismael, true | Adapts it's memory space.
arrayOld = new Array(12, "Ismael", true) // 12, Ismael, true | Reserves it's memory space
console.log(arrayNew)
console.log(arrayOld)

arrayNew = [], arrayOld = []
arrayNew = [1] // 1 | How it adapts, only show the result
arrayOld = new Array(1) // 1 empty items | If only as integer is entered, the reserve is account, the system reserved that amount of memory.  
console.log(arrayNew)
console.log(arrayOld)

arrayNew = [], arrayOld = new Array(3)
arrayNew[0] = 12 // 12, Ismael, true | This is how data is entered by position.
arrayNew[1] = "Ismael"
arrayNew[2] = true
arrayOld[0] = 12 // 12, Ismael, true | Works the same
arrayOld[1] = "Ismael"
arrayOld[2] = true
console.log(arrayNew)
console.log(arrayOld)

arrayNew = [], arrayOld = new Array(3)
arrayNew[0] = 12
arrayNew[1] = "Ismael"
arrayNew[2] // 12, Ismael | Just doesn't put the items
arrayOld[0] = 12
arrayOld[1] = "Ismael"
arrayOld[2] // 12, Ismael, 1 empty items | continue saving space in memory
console.log(arrayNew)
console.log(arrayOld)

// * push & pop * //
arrayNew = []
arrayNew.push(12)
arrayNew.push("push & pop")
arrayNew.push(true) // 12, push & pop, true | the push enter the data in an orderly manner
console.log(arrayNew)

dataDeleted.push(arrayNew.pop()) // Data remove: true, push & pop - 12 | Delete the last data and return it
dataDeleted.push(arrayNew.pop()) // To delete more that one data, you have to duplicate it.
console.log("Data remove:", dataDeleted, "-", arrayNew)

// * shift & unshift * //
arrayNew.push(...dataDeleted) // push() inserts an array into another array; the spread operator "..." is used to insert its elements.
dataDeleted = []
arrayNew.unshift(10, 11) // unshift() | adds elements to the beginning
console.log(arrayNew)

dataDeleted.push(arrayNew.shift()) // shift() | removes the first element and returns it
dataDeleted.push(arrayNew.shift())
console.log(dataDeleted)

// * length * //
arrayNew.unshift(10, 11)
console.log(arrayNew)
console.log(arrayNew.length) // length |Returns the number of elements in the array

// * slice & splice* //
arrayNew2 = arrayNew.slice(0, 3) // slice(start, end): copies a segment of the array without modifying the original
console.log(arrayNew)
console.log(arrayNew2)

// * splice * //
arrayNew.splice(3, 2) // splice(start, deleteCount, item1, item2...): removes and/or adds items to the array
console.log(arrayNew)

arrayNew = [10, 11, 12, "Ismael", true]

console.log(arrayNew)
arrayNew.splice(4, 1, false, true)
console.log(arrayNew)