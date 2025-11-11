// Data type exercises

// 1. Escribe un comentario en una línea
    // This is a comment in one line

// 2. Escribe un comentario en varias líneas
    /*
    This is a comment in
    more lines
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let firstName = "Ismael Dominici"
    let age = 25
    let isLegalAge = true
    let isUndefined
    let isNull = null
    let isSymbol = Symbol()
    let isBigInteger = 83647325745234232342n

// 4. Imprime por consola el valor de todas las variables
    console.log("Value of Variables:\n")

    console.log(firstName)
    console.log(age)
    console.log(isLegalAge)
    console.log(isUndefined)
    console.log(isNull)
    console.log(isSymbol)
    console.log(isBigInteger)

// 5. Imprime por consola el tipo de todas las variables
    console.log("\nType of Variables:\n")

    console.log(typeof(firstName))
    console.log(typeof(age))
    console.log(typeof(isLegalAge))
    console.log(typeof(isUndefined))
    console.log(typeof(isNull))
    console.log(typeof(isSymbol))
    console.log(typeof(isBigInteger))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    firstName = "Manuel Alfredo"
    age = 15
    isLegalAge = false
    isUndefined
    isNull = null
    isSymbol = Symbol("Hola")
    isBigInteger = 234832648732483264n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    firstName = 23
    age = "Zacarias Ferreira"
    isLegalAge = 2347286348323423432473249n
    isUndefined = "definido"
    isNull = true
    isSymbol = null
    isBigInteger = 234.231

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const myName = "Ismael Dominici"
    const birthday = 25
    const isHuman = true
    // const god | An undefined constant cannot be declared
    const thisNull = null
    const thisSymbol = Symbol("Hello")
    const ageUniverse = 13800000000n

// 9. A continuación, modifica los valores de las constantes
    // myName = "Rafael Ortiz"
    // birthday = 30
    // isHuman = false
    // thisNull = "notNull"
    // thisSymbol = Symbol("Amen")
    // ageUniverse = 26700000000n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse