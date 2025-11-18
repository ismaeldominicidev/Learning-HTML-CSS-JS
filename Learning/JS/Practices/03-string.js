let firstName = "Ismael David"
let lastName = "Dominici Moronta"

// 1. Concatena dos cadenas de texto
let fullName = firstName + " " + lastName

// 2. Muestra la longitud de una cadena de texto
console.log(fullName.length)

// 3. Muestra el primer y último carácter de un string
console.log(fullName[0])
console.log(fullName.at(-1))

// 4. Convierte a mayúsculas y minúsculas un string
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let message = `My name is ${fullName},
                nice to meet you.`

// 6. Interpola el valor de una variable en un string
message = `nice to meet you, my name is ${firstName}`

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(fullName.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(fullName.includes("Ismael"))
console.log(fullName.includes("Rafael"))

// 9. Comprueba si dos strings son iguales
console.log(firstName == lastName)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(firstName.length == lastName.length)

console.log(lastName.length)

const colors = ["red", "blue"];
colors.push("green"); // Allowed — array elements can change
console.log(colors); // red, ble, green