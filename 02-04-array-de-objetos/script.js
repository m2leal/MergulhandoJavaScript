person1 = {
    name: 'Daniel',
    age: 22
}

person2 = {
    name: 'Rafaela',
    age: 32
}

person3 = {
    name: 'Caio',
    age: 36
}

var list = [person1, person2, person3]

for (var person of list) {
    console.log(person.name)
}