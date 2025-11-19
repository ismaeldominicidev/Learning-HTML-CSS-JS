// 1. Crea un objeto con 3 propiedades
let car = {
    color: "Azul",
    mark: "Toyota",
    type: "Hybrid"
}

// 2. Accede y muestra su valor
console.log(car)

// 3. Agrega una nueva propiedad
car.engine = "Engine v6 of 3.5 liters"

// 4. Elimina una de las 3 primeras propiedades
delete car.color

// 5. Agrega una función e invócala
car.isRun = function () {
    console.log("The car is running")
}

car.isRun()

// 6. Itera las propiedades del objeto
for (let property in car) {
    console.log(`${property}: ${car[property]}`)
}

// 7. Crea un objeto anidado
car.owners = {
    owner1: "Ismael",
    owner2: "Franchesca"
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(car.owners)

// 9. Comprueba si los dos objetos creados son iguales
console.log(car === car.owners)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(car.engine === car.owners.owner1)