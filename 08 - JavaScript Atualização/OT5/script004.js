function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

let result = calculateBMI(85, 1.80);

console.log(result);

// MENOR QUE 18,5 = BAIXO PESO
// ENTRE 18,5 E 24,9 = PESO NORMAL
// ENTRE 25 E 29,9 = SOBREPESO
// MAIOR QUE 30 = OBESIDADE