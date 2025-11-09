let userName = "Ismael Dominici"
let age = 15
let password = "123qwe"
let activeAccounts = 2 
let userLevel = 1
let isUser
let month = 11
let stationYear
let language = "English"


// 1. Imprime por consola tu nombre si una variable toma su valor

if (userName == "Ismael Dominici") {
    console.log(userName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

if (userName == "Ismael Dominici" && password == "123qwe") {
    console.log("Access Allowed")
} else {
    console.log("Incorrect user or password")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

if (userLevel == 1 && activeAccounts >= 2) {
    console.log(`The basic plan only allows two accounts. Upgrade to the standard plan to enjoy this and other benefits.`)
} else if (userLevel == 2 && activeAccounts >= 3) {
    console.log(`The standard plan only allows three accounts. Upgrade to the pro plan to enjoy this and other benefits.`)
} else {
    console.log("Account successfully created")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

if (age >= 18) {
    console.log(`${userName} can vote`)
} else {
    console.log(`${userName} is ${18 - age} years away from voting rights`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

isUser = age >= 18 ? "Adult" : "Minor"
console.log(isUser)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

switch (month) {
    case 12:
    case 1:
    case 2:
        stationYear = "Winter"
        break
    case 3:
    case 4:
    case 5:
        stationYear = "Spring"
        break
    case 6:
    case 7:
    case 8:
        stationYear = "Summer"
        break
    case 9:
    case 10:
    case 11:
        stationYear = "Autumn"
}
console.log(stationYear)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("This month has 31 days")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("This month has 30 days")
        break
    default:
        console.log("This month has 28 days")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

switch (language) {
    case "English":
        console.log(`Hi ${userName}!`)
        break
    case "Español":
        console.log(`Hola ${userName}!`)
        break
    case "Italiano":
        console.log(`Ciao ${userName}!`)
        break
    case "Português":
        console.log(`Olá ${userName}!`)
        break
    case "Français":
        console.log(`Bonjour ${userName}!`)
        break
    case "日本人":
        console.log(`こんにちは ${userName}!`)
        break
}