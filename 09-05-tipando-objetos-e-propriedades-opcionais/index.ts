
type Person  = {
    name: string
    age: number
    contacts?: string[]
    isAlive: boolean
} 

const person:Person = {
    age: 22,
    name: 'Lucas',
    contacts: ['daniel.bonifacio@algaworks.com'],
    isAlive: true
}

const person2:Person = {
    name: 'Márcio',
    age: 37,
    isAlive: true
}