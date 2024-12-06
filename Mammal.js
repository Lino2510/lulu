import Animal from "./animal.js";

class Mammal extends Animal {
    constructor(name, food, energy, canReproduce, age) {
     super(name, food, energy, canReproduce, age);
    }
    // polymorphism
    isAdult() {
        return this.getAge() > 50
    }
}

export default Mammal;