// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

let i = 0
while (i <= 20) {
    console.log(i)
    i++
}

i = 0
do {
    console.log(i)
    i++
} while (i <= 20)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let result = 0
for (let i = 1; i <= 100; i++) {
    result += i
}
console.log(result)

i = 0
result = 0
while (i <= 100) {
    result += i
    i++
}
console.log(result)

i = 0
result = 0
do {
    result += i
    i++
} while (i <= 100)
console.log(result)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 2; i <= 50; i++) {
    let modulo = i % 2
    if (modulo === 0) {
        console.log(i)
    }
}

i = 2
while (i <= 50) {
    let modulo = i % 2
    if (modulo === 0) {
        console.log(i)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["Ismael", "Franchesca", "Adrian", "Ronald", "Ivelisse"]
for (let name of names) {
    console.log(name)
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

i = 0
while (i < names.length) {
    console.log(names[i])
    i++
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let myString = "Hi, gentleman, how are you?"
let stringSimple = myString.replace(/[ ?!"'`.,:;]/g, "").toLowerCase()
let vocal = ["a", "e", "i", "o", "u"]
let totalVocal = 0

for (let letter of stringSimple) {
    totalVocal += vocal.includes(letter) ? 1 : 0
}
console.log(totalVocal)

totalVocal = 0
for (let i = 0; i < stringSimple.length; i++) {
    totalVocal += vocal.includes(stringSimple[i]) ? 1 : 0
}
console.log(totalVocal)

i = 0
totalVocal = 0
while (i < stringSimple.length) {
    totalVocal += vocal.includes(stringSimple[i]) ? 1 : 0
    i++
}
console.log(totalVocal)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1, 3, 5, 2, 7, 5, 8]
let total = 1
for (let number of numbers) {
    total *= number
}
console.log(total)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
total = 0
for (let i = 0; i <= 12; i++) {
    console.log(`${i} X 5 = ${i * 5}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let myStringFlip = ""
for (let i = myString.length - 1; i >= 0; i--) {
    myStringFlip += myString[i]
}
console.log(myStringFlip)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacciNum
let temp
for (let i = 0, x = 0, y = 1; i < 10; i++) {
    fibonacciNum = x
    temp = y
    y += x
    x = temp
    console.log(fibonacciNum)
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let allNumbers = [12, 4, 23, 5, 34, 2, 1, 0, 23, 4]
let numbersGreTen = []
for (let number of allNumbers) {
    if (number > 10) {
        numbersGreTen.push(number)
    }
}
console.log(numbersGreTen)