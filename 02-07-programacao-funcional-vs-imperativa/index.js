var person = {
    age: 17,
    name: 'Lucas'
}

// Função pura
function getRemainingYearsToMajority(person) {
    return 18 - person.age
}

// Função impura - gera efeitos colaterais
function increasePersonAge(person) {
    person.age = person.age + 1
}

// chamou uma função impura
increasePersonAge(person)
var remainingYears = getRemainingYearsToMajority(person)
console.log(remainingYears)