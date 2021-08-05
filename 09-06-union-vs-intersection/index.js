"use strict";
function findPerson(cpf) {
    if (typeof cpf === 'string') {
        return cpf.toUpperCase();
    }
    return cpf.toFixed(2);
}
console.log(findPerson('abc'));
console.log(findPerson(123));
function getPersonStatus(person) {
    return '[sex: ' + person.sex + ', hungry: ' + person.hungry + ']';
}
const person = {
    sex: 'male',
    hungry: true
};
const personStatus = getPersonStatus(person);
console.log(personStatus);
