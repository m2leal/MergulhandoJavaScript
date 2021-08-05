
type Cpf  = string|number

function findPerson (cpf:Cpf)
{
    if(typeof cpf === 'string')
    {
        return cpf.toUpperCase()
    }

    return cpf.toFixed(2)

}


console.log(findPerson('abc'))
console.log(findPerson(123))

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

type Animal = {sex: 'male' | 'female'}
type Human  = {hungry: boolean}
type Person = Animal & Human

function getPersonStatus(person: Person) {
    return '[sex: ' + person.sex + ', hungry: ' + person.hungry + ']'
}

const person:Person = {
    sex: 'male',
    hungry: true
}

const personStatus = getPersonStatus(person)
console.log(personStatus)