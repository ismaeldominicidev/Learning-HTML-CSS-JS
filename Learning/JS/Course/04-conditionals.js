let character = "Ismael Dominici"
let health = 43
let weapon = "Sword A+"
let armor = 12
let damageEnemy = 7
let damage

// * If Statement * //
if (armor > damageEnemy) { // The ‘if’ statement allows a block of code to be executed only if a condition is true.
    console.log(`Hearth was reduced to ${health - (damageEnemy * (50 / 100))}`)
} else if (armor < damageEnemy) { // We can chain ‘else if’ to evaluate multiple conditions
    console.log(`Health was reduced to ${health - damageEnemy}`)
} else { // The ‘else’ captures all cases that do not meet any previous condition.
    console.log(`Health was reduced to ${health - (damageEnemy * (25 / 100))}`)
}

// * Switch statement * //
switch (weapon) { // ‘switch’ is another way to make decisions, useful when there are many possible values for a variable
    case "Sword B-":
        damage = 3
        break // ‘break’ prevents the code from continuing to execute the following cases
    case "Sword B":
        damage = 5
        break
    case "Sword B+":
        damage = 7
        break
    case "Sword A-":
        damage = 9
        break
    case "Sword A":
        damage = 11
        break
    case "Sword A+":
        damage = 13
        break
    default: // 'default' se ejecuta si ningún caso coincide
        damage = 0
}
console.log(`The ${weapon} has a damage of ${damage}`)

// * Ternary Operators * //
// El operador ternario es una forma compacta de 'if/else'
statusCharacter = health <= 0 ? `${character} is dead`: `${character} is alive`
console.log(statusCharacter)