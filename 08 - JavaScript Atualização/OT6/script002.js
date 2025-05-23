let car = {
    brand: "Citroen",
    model: "C4 Cactus",
    year: 2019,
}

car.color = "Preto";
car.year = 2020;

console.log(`Meu carro: ${Object.values(car).join(", ")}`);