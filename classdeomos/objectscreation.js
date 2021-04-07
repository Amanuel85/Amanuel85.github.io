//Object literal
const person1 = {
    name: "John",
    age: 23
}
console.log(typeof(person1));
console.log(person1.name);
console.log(person1.age);

// constructor function
function Person() {
    this.name = 'John';
    this.age = 23;
}

// create an object
const person2 = new Person();
console.log(typeof(person2));
console.log(person2.name);
console.log(person2.age);