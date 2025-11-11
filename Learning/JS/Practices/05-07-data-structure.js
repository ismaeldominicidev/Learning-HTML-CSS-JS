let animals = []
let books = new Set()
let months = new Map()

// 1. Crea un array que almacene cinco animales
animals = ["Dog", "Cat", "Turtle", "Mouse", "Bird"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.push("Lion")
animals.unshift("Spider")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
books = new Set([
    "Code Clear",
    "Thinking, Fast and Slow",
    "The pragmatic programmer",
    "The subtle art of not giving a fuck",
    "Principles"
])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido

books.add("Social intelligence and nonverbal communication")
books.add("Tools of titans")
books.add("Tools of titans")
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete("Social intelligence and nonverbal communication")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
months = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"],
])
console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("Month 5 exists?", months.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("Winter", [12, 1, 2])
months.set("Spring", [3, 4, 5])
months.set("Summer", [6, 7, 8])
months.set("Autumn", [9, 10, 11])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let friendsArray = [["F", "Franchesca"], ["A", "Anthuanett"], ["Ad", "Adrian"], ["An", "Angel"], ["Ro", "Ronald"]]
console.log(friendsArray)

let friendsSet = new Set(friendsArray)
console.log(friendsSet)

let friendsMap = new Map(friendsSet)
console.log(friendsMap)