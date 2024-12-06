import Animal from "./animal.js";
import Mammal from "./Mammal.js";
const elephant = new Animal("Gajah", "Herbivora", 100, true, 100);
const tiger = new Animal ("Macan", "Carnivora", 50, true, 15);
const orangutan = new Mammal ('orangutan', "Omnivore", 200, false, 21);
tiger.name = "tiger"

console.log (orangutan.isAdult())
console.log(tiger).isAdult()