var me = {
    name: 'Daniel',
    age: 17
}

function checkAge(person) {
    console.log('A idade da pessoa é ' + person.age)

    if(person.age >= 18) {
        console.log('Primeiro bloco IF')
    }
    else {
        console.log('bolco ELSE')
    }

    if(person.age === '17') {
        console.log('Segundo bloco IF')
    }

    if(person.age == '17') {
        console.log('Terceiro bloco IF')
    }

}

checkAge(me)