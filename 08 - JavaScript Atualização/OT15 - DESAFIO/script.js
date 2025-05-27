let isTruthy = (arg) => !!arg;

console.log(isTruthy(false));      // false
console.log(isTruthy(0));          // false
console.log(isTruthy(-0));         // false
console.log(isTruthy(0n));         // false
console.log(isTruthy(""));         // false
console.log(isTruthy(null));       // false
console.log(isTruthy(undefined));  // false
console.log(isTruthy(NaN));        // false

console.log(isTruthy(true));           // true
console.log(isTruthy(1));              // true
console.log(isTruthy(-1));             // true
console.log(isTruthy("0"));            // true
console.log(isTruthy("false"));        // true
console.log(isTruthy([]));             // true
console.log(isTruthy({}));             // true
console.log(isTruthy(Infinity));       // true
console.log(isTruthy(-Infinity));      // true
console.log(isTruthy(function () { }));   // true


let carro = {
    marca: "Volkswagen",
    modelo: "Gol",
    placa: "ABC-1234",
    ano: 2020,
    cor: "Branco",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,

    mudarCor: function (novaCor) {
        this.cor = novaCor;
    },

    obterCor: function () {
        return this.cor;
    },

    obterModelo: function () {
        return this.modelo;
    },

    obterMarca: function () {
        return this.marca;
    },
    obterMarcaModelo: function () {
        return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
    },

    adicionarPessoas: function (numeroPessoas) {
        if (this.quantidadePessoas === this.assentos) {
            return "O carro já está lotado!";
        }

        let assentosDisponiveis = this.assentos - this.quantidadePessoas;

        if (numeroPessoas > assentosDisponiveis) {
            let pluralOuSingular = assentosDisponiveis === 1 ? "pessoa" : "pessoas";
            return `Só cabem mais ${assentosDisponiveis} ${pluralOuSingular}!`;
        }

        this.quantidadePessoas += numeroPessoas;
        return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
    },

    removerPessoas: function (numeroPessoas) {
        if (this.quantidadePessoas === 0) {
            return "O carro já está vazio!";
        }
        if (numeroPessoas > this.quantidadePessoas) {
            let msg = `Não é possível remover ${numeroPessoas} pessoas. Temos apenas ${this.quantidadePessoas} no carro.`;
            this.quantidadePessoas = 0;
            return `${msg} O carro agora está vazio.`;
        }
        this.quantidadePessoas -= numeroPessoas;
        return `Saíram ${numeroPessoas} pessoas. Restam ${this.quantidadePessoas} pessoas no carro.`;
    }
};

console.log(carro.obterCor()); // Branco

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // Verde Musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); // Esse carro é um Volkswagen Gol

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2)); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4)); // Só cabem mais 3 pessoas!

// Faça o carro encher.
console.log(carro.adicionarPessoas(3)); // Já temos 5 pessoas no carro!
console.log(carro.adicionarPessoas(1)); // O carro já está lotado!

// Tire 4 pessoas do carro.
console.log(carro.removerPessoas(4)); // Saíram 4 pessoas. Restam 1 pessoas no carro.

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10)); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); // 1