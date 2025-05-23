let car = {
    brand: "Citroen",
    model: "C4 Cactus",
    year: 2019,
}

for (let property in car) {
    console.log(`${property}: ${car[property]}`);
}