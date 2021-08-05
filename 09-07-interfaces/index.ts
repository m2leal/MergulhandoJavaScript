interface Person {
    name: String
    age: number
}

interface Person {
    sex: 'male' | 'female'
}

const person: Person = {
    age: 22,
    name: 'Lucas',
    sex: 'male'
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

interface Animal {
    sex: 'male' | 'female'
}

interface Human extends Animal {
    name: string
    age: number
}

const human: Human = {
    name: 'Marcio',
    age: 37,
    sex: 'male'
}