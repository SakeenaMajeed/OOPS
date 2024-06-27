//class OOP {
//   constructor() {
//     this.language = "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which can contain data (properties) and code (methods). The main principles of OOP are:
// 1. Encapsulation: Binding data and functions into a single unit (object).
// 2. Abstraction: Hiding internal details and showing only essential features.
// 3. Inheritance: Creating new classes based on existing ones.
// 4. Polymorphism: Objects can take on many forms.
// OOP aims to make code more reusable, maintainable, and easier to reason about by organizing it into modular, self-contained objects."
//   }
// }
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hey 🎀, My name is ${this.name} and I am ${this.age} years old.✨`);
    }
}
const person1 = new Person("sakeena", 16);
person1.greet();
export {};
