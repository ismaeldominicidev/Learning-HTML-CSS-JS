// * Declaration & Initialization * //
let mySet = new Set([18, "Ismael", true, 234324n])
console.log(mySet)

// * add & delete * //
mySet.add("hello")
mySet.add(12)
console.log(mySet)

mySet.delete(4)
mySet.delete(5)
console.log(mySet)

mySet.delete("hello")
console.log(mySet.delete(12))
console.log(mySet)

// * has * //
console.log(mySet.has(18))
console.log(mySet.has(19))

// * size * //
console.log(mySet.size)

// * From set to array * //
let myArray = Array.from(mySet)
console.log(myArray)

// * clear * //
mySet.clear()
console.log(mySet)

// * From array to set * //
mySet = new Set(myArray)
console.log(mySet)

// * Does not allow duplicate * //
mySet.add("Ismael")
console.log(mySet)

mySet.add("ismael")
console.log(mySet)