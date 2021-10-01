console.log('Hi there');

class Animal {
    constructor(name, species, color) {
          this.name = name;
          this.species = species;
          this.color = color;
      }
      getNameAndSpecies() {
        let an = `${this.name} is the name of a ${this.species} dog`;
        return an;
    }
};


let Darwin = new Animal("Darwin", "Beagle, 3);
let Chip = new Animal("Chip", "Chimpanzee", 5);
let Mochi = new Animal("Mochi", "Cat", 1);
console.log(Darwin);
console.log(Mochi);
console.log(Chip);
console.log("My dog's name is", Darwin.name);
console.log("His breed is", Darwin.species);
