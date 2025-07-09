const cidades: string[] = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador"];

console.log("Terceira cidade:", cidades[2]);


//////////////////////////////////////////////////////////////
let numeros: number[] = [10, 20, 30, 40, 50];

numeros.splice(3, 0, 35);

const indice20 = numeros.indexOf(20);
if (indice20 !== -1) {
  numeros.splice(indice20, 1);
}

console.log("Array final:", numeros);

//////////////////////////////////////////////////////////////

const numerosOriginais: number[] = [1, 2, 3, 4, 5];

const multiplicadosPor3 = numerosOriginais.map(num => num * 3);

console.log("Multiplicados por 3:", multiplicadosPor3); // [3, 6, 9, 12, 15]


//////////////////////////////////////////////////////////////

const todosNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = todosNumeros.filter(num => num % 2 !== 0);

console.log("Números ímpares:", impares); // [1, 3, 5, 7, 9]


//////////////////////////////////////////////////////////////

const valores: number[] = [5, 7, 10, 12, 15];

const somaTotal = valores.reduce((soma, num) => soma + num, 0);

console.log("Soma total:", somaTotal);