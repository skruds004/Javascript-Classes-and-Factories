class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
    //changed these so there wouldn't be too many method calls
    eat(times = 1) {
        this.weight += times;
        this.mood += times;
    }
    exercise(times = 1) {
        this.weight -= times;
    }
    ageUp(years = 1) {
        this.age += years;
        this.height += years;
        this.weight += years;
        this.mood -= years;
        this.bankAccount += years * 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
        hamster.owner = this.name;
    }
}

const person1 = new Person("Timmy");
person1.ageUp(5);
person1.eat(5);
person1.exercise(5);
person1.ageUp(9);
const hamster1 = new Hamster("Gus");
person1.buyHamster(hamster1);
person1.ageUp(15);
person1.eat(2);
person1.exercise(2);
console.log(person1);
