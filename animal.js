class Animal {
    #age
     constructor(name, food, energy, canReproduce) {
       this.name = name;
       this.food = food;
       this.energy = energy;
       this.canReproduce = canReproduce;
       this.#age = 20
     }

     get #Age() {
        return this.#age;
     }

    // Tell Don't Ask
    isAdult() {
        return this.#age > 18
    }
}

export default Animal;