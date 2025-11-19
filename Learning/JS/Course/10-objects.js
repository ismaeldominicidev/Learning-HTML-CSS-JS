// * Declaration & Initialization * //
let person = {
    name: "Ismael",
    age: 18,
    sex: "Man",
    isAdult: true
}

// * Point notation * \\
console.log(person.name)

// * Bracket notation * \\
console.log(person["name"])

// * Modification * \\
person.name = "Ismael David"
console.log(person.name)

// * typeof() * \\
console.log(typeof(person))
console.log(typeof (person.age)) // number

person.age = "18"

console.log(typeof (person.age)) // string

// * Remove properties * \\
console.log(person)

delete person.age

console.log(person)

// * Add properties * \\
console.log(person)

person.email = "ismaeldominici.dev@gmail.com"

console.log(person)

// * Methods with functions * \\
let person2 = {
    name: "Franchesca",
    age: 18,
    sex: "woman",
    walk: function (isTrue = true) {
        const stated = isTrue ? "Is walking" : "Isn`t walking"
        return stated
    }
}

console.log(person2, person2.walk(false))

// * Objects nestings * \\
let person3 = {
    name: "Franchesca",
    age: 18,
    sex: "woman",
    walk: function (isTrue = true) {
        const stated = isTrue ? "Is walking" : "Isn`t walking"
        return stated
    },
    job: {
        isJob: function (isTrue = true) {
            const stated = isTrue ? "Is job" : "Isn't job"
            return stated
        },
        job: "Programming",
        expAge: 3
    }
}

console.log(person3.job.isJob(false))

// * Comparison * \\
let personA = {
    name: "Ismael David",
    age: 18,
}

let personB = {
    name: "Ismael David",
    age: "18",
}

console.log(personA === personB) // false
console.log(personA == personB) // false

console.log(personA.age === personB.age) // false
console.log(personA.age == personB.age) // true

// * Iteration * \\
// for (let key of person3) {
//     console.log(`${key}: ${[person3.key]}`)
// } 

// for (let key in person3) {
//     console.log(`${key}: ${[person3.key]}`)
// }

for (let key in person3) {
    console.log(`${key}: ${[person3[key]]}`)
}

for (let key in person3.job) {
    console.log(`${key}: ${[person3.job[key]]}`)
}

// * Interpolation of objects * \\
let person4 = {
    name: "Franchesca",
    age: 18,
    sex: "woman",
    job: {
        isJob: function () {
            console.log(`My job is ${this.job}, and I have ${this.expAge} years of experience`)
        },
        job: "Programming",
        expAge: 3
    }
}

person4.job.isJob()

// * Functions with objects * \\
function Person(name, age) { // The most recommended is to use a function
    this.name = name
    this.age = age
}

let person5 = new Person("Ismael", 18)
console.log(person5)
console.log(person5.name)

console.log(typeof(person5)) // object