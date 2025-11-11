// * Declaration & Initialization * //
let myMap = new Map([
    ["Name", "Ismael"],
    ["Hobbies", ["Programming", "Paint", "Music", "Barista"]],
    ["Age", 18],
    ["Working", false],
])
console.log(myMap)

// * set * //
myMap.set("Surname", "Dominici")
console.log(myMap)

// * get * //
let myName = myMap.get("Name")
let mySex = myMap.get("Sex")
console.log(myName, mySex)

// * has * //
console.log(myMap.has("Name"))
console.log(myMap.has("Sex"))

// * keys, values, entries * //
let keys = myMap.keys()
let values = myMap.values()
let entries = myMap.entries()
console.log(keys, values, entries)

// * delete & clear * //
console.log(myMap.delete("Surname"))
console.log("After delete:", myMap)

myMap.clear()
console.log("After clear:", myMap)