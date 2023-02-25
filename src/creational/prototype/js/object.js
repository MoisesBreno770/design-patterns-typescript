const personPrototype = {
    firstName: 'Moises',
    lastName: 'Carvalho',
    age: 21,
    
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());