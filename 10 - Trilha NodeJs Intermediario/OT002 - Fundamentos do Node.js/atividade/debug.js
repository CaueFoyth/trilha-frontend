function soma(a, b) {
    console.log(`Somando ${a} + ${b}`);
    return a + b;
}

function subtrai(a, b) {
    console.log(`Subtraindo ${a} - ${b}`);
    return a - b;
}

function multiplica(a, b) {
    console.log(`Multiplicando ${a} * ${b}`);
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.error("Erro: Divisão por zero!");
        return null;
    }
    console.log(`Dividindo ${a} / ${b}`);
    return a / b;
}

console.log("Resultado da soma:", soma(10, 5));
console.log("Resultado da subtração:", subtrai(10, 5));
console.log("Resultado da multiplicação:", multiplica(10, 5));
console.log("Resultado da divisão:", divide(10, 5));