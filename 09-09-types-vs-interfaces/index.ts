type Sex = 'male' | 'female'

//interface PODE extender de type
type Animal = {
    sex: Sex        // Type aliasing, só no type
    hungry: boolean
    age: number
}

interface Mammal extends Animal {
    weaned: boolean
}

//type NÃO pode extender de interface
type Person = Mammal & {
    name: string
}

const animal: Person = {
    hungry: false,
    weaned: true,
    sex: 'male',
    age: 6,
    name: 'Marcio'
}


interface Greet {
    (name: string): string
}

type GreetMethod = (name: string) => string

// Nome da variavel, parâmetro e retorno
const greet1 = (name: String) => 'Hello, ' + name
const greet2: Greet = name => 'Hello, ' + name
const greet3: GreetMethod = name => 'Hello, ' + name
