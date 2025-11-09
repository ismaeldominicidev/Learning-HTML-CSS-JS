let character = "Ismael Dominici"
let health = 43
let weapon = "Sword A+"
let armor = 12
let damageEnemy = 7
let damage

// * If Statement *
if (armor > damageEnemy) {
    console.log(`Hearth was reduced to ${health - (damageEnemy * (50 / 100))}`)
} else if (armor < damageEnemy) {
    console.log(`Health was reduced to ${health - damageEnemy}`)
} else {
    console.log(`Health was reduced to ${health - (damageEnemy * (25 / 100))}`)
}

// * Switch statement *
switch (weapon) {
    case "Sword B-":
        damage = 3
        break
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
    default:
        damage = 0
}
console.log(`The ${weapon} has a damage of ${damage}`)

// * Ternary Operators *
statusCharacter = health <= 0 ? `${character} is dead`: `${character} is alive`
console.log(statusCharacter)