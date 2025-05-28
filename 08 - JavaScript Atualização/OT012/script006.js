function menu(...foods) {
    console.log("Cardápio:");
    foods.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

menu("Pizza", "Hambúrguer", "Salada", "Sushi");