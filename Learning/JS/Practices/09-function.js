// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(num1 = 0, num2 = 0) {
    return num1 + num2
}

console.log(sum(23, 12))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function supNum(numbers) {
    if (numbers.length > 0) {
        let temp = numbers[0]
        for (let number of numbers) {
            if (temp < number) {
                temp = number
            }
        };
        return temp
    }
    return null
}

let array = [23, 4, 5, 4, 2, 3, 6, 5, 32, 2, 4, 64, 5]
console.log(supNum(array))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocalCount(text = "") {
    let textSimple = text.toLowerCase()
    let vocal = ["a", "e", "i", "o", "u"]
    let vocalCount = 0
    for (let letter of textSimple) {
        vocalCount += vocal.includes(letter) ? 1 : 0
    }
    return vocalCount
}

let text = "A text is a composition of signs encoded in a writing system that forms a unit of meaning."

console.log(vocalCount(text))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function upperText(listText) {
    let upperText = []
    for (let text of listText) {
        upperText.push(text.toUpperCase())
    }
    return upperText
}

listText = ["Ismael", "Franchesca", "Ronald", "Angel"]

console.log(upperText(listText))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function validNum(num) {
    if (!(typeof num === "number")) {
        num = parseFloat(num)
        if (isNaN(num)) {
            return NaN
        }
    }
    if (!isFinite(num)) {
        return NaN
    }
    return num
}

function squareRoot(num, epsilon = 1e-12) {
    let high = num, low = 0
    let middle =  (high + low) / 2
    while (Math.abs(middle * middle - num) > epsilon * num) {
        if ((middle * middle) > num) {
            high = middle
        } else {
            low = middle
        }

        let tempMiddle = (high + low) / 2
        if (middle === tempMiddle) break

        middle = tempMiddle
    }
    return middle
}

function possDiv(k, option) {
    if (option == "high") return ((6 * k) + 1)
    if (option == "low") return ((6 * k) - 1)
}

function isPrime(num) {
    num = validNum(num)
    if (isNaN(num)) return NaN

    if (num <= 1) return false

    if (num === 2 || num === 3) return true

    if ((num % 2 === 0) || (num % 3 === 0)) return false

    const sqrtNum = squareRoot(num)

    let k = 1
    do {
        if (num % (possDiv(k, "low")) === 0 || (num % possDiv(k, "high")) === 0) {
            return false
        }
        k++
    } while ((possDiv(k, "high") <= sqrtNum) && (possDiv(k, "low") <= sqrtNum))
    return true
}

console.log(isPrime(2147483647))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementCom(arr1, arr2) {
    let newArr = new Set()
    for (let element1 of arr1) {
        for (let element2 of arr2) {
            if (element1 === element2) newArr.add(element1)
        }
    }
    return [...newArr]
}

let arr1 = [1, true, 64, "new", 4, "hola", 23]
let arr2 = [23, "hola", true, 54, 23, 43]

console.log(elementCom(arr1, arr2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumPairs(numbers) {
    let result = 0
    for (let number of numbers) {
        if ((number % 2) == 0) {
            result += number
        }
    }
    return result
}

let numbers = [23, 4, 21, 35, 2, 43, 5, 34, 7, 45, 1]

console.log(sumPairs(numbers))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numExpoSquart(numbers) {
    let numbersExpo = []
    for (let number of numbers) {
        numbersExpo.push(number ** 2)
    }
    return numbersExpo
}

console.log(numExpoSquart(numbers))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertString(string) {
    return string.split(" ").reverse().join(" ")
}

console.log(invertString("Hello Sir. how are you? I hope so."))

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num) {
    let numFac = num - 1
    for (let i = numFac; i > 1; i--) {
        num *= i
    }
    return num
}
console.log(factorial(5))