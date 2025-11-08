let x = 15
let y = 10
let i = 5

// 1. Crea una variable para cada operación aritmética

let addition = x + y
let subtraction = x - y
let multiplication = x * y
let division = x / y
let exponent = x ** y
let modulo = x % y

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

addition += i
subtraction -= i
multiplication *= i
division /= i
exponent **= i
modulo %= i

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(x > y)
console.log(y <=x)
console.log(y != i)
console.log(i == "5")
console.log(i <= x)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(x < y)
console.log(y >=x)
console.log(y == i)
console.log(i != "5")
console.log(i >= x)

// 5. Utiliza el operador lógico and

let andOne= true && true // true
let andTwo = true && false // false
let andTree = 5 > 2 && 23 <= 12 && 12 >= 12 // false 
console.log(andOne)
console.log(andTwo)
console.log(andTree)

// 6. Utiliza el operador lógico or

let orOne= true || true // true
let orTwo = false || false // false
let orTree = 5 > 2 || 23 <= 12 || 12 >= 12 // true 
console.log(orOne)
console.log(orTwo)
console.log(orTree)

// 7. Combina ambos operadores lógicos

console.log(true && (false || true) && (false || true)) // true
console.log(false || (true && false) && (true || false)) // false

// 8. Añade alguna negación

console.log(!(true && (false || true) && !(false || true))) // true
console.log(false || !(true && false) && (true || false)) // true

// 9. Utiliza el operador ternario

let massage

let isAwake = true
massage = isAwake ? "I'm ready for the day" : "I'm still sleeping"
console.log(massage)

let isReadyCoffee = false
massage = isReadyCoffee ? "Let's start programming" : "let's make coffee"
console.log(massage)

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(!((x + y * i) > (y % i / x)) && ((x ** i) < (x * i * y))) // false
console.log(((x * i) > (y ** i)) || !((y - i) ** (x / y)) >= (x ** y)) // false
console.log(!(((x - i) % (x - y)) > ((y * x) % ((x - y) / (x * y)))) && !((y + x) > (x * i))) // true