class Vehicle {

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    describe() {
        console.log(`Marca: ${this.brand}, Modelo: ${this.model}, Ano: ${this.year}`);
    }
}

let fusca = new Vehicle("Volkswagen", "Fusca", 1976);

fusca.describe();