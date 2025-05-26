class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`O animal ${this.name} faz o som: ${this.sound}`);
    }
}

let dog = new Animal("Cachorro", "Au Au");

dog.makeSound();