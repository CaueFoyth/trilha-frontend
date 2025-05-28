let qualquerVariavel;

class Pessoa {
    constructor(nome, sobrenome, sexo, idade, altura, peso) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.andando = false;
        this.metrosCaminhados = 0;
    }

    caminhouQuantosMetros(metros) {
        this.metrosCaminhados += metros;
    }
    fazerAniversario() {
        this.idade++;
    }
    andar(metros) {
        this.caminhouQuantosMetros(metros);
        this.andando = true;
    }
    parar() {
        this.andando = false;
    }
    nomeCompleto() {
        return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
    }
    mostrarIdade() {
        return `Olá! Tenho ${this.idade} anos!`;
    }
    mostrarPeso() {
        return `Olá! Eu peso ${this.peso} kg!`;
    }
    mostrarAltura() {
        return `Olá! Eu tenho ${this.altura} m de altura!`;
    }

    apresentacao() {
    let artigo = this.sexo === "Feminino" ? "a" : "o";
    let textoIdade = this.idade === 1 ? "ano" : "anos";
    let textoMetros = this.metrosCaminhados === 1 ? "metro" : "metros";
    return `Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${textoIdade}, ${this.altura} de altura, meu peso é ${this.peso} kg e, só hoje, eu já caminhei ${this.metrosCaminhados} ${textoMetros}!`;
}
}

let pessoa = new Pessoa("Cauê", "Foyth", "Masculino", 19, 1.80, 85);


console.log(pessoa.nomeCompleto()); // "Olá! Meu nome é Cauê Foyth!"
console.log(pessoa.mostrarIdade()); // "Olá! Tenho 19 anos!"
console.log(pessoa.mostrarPeso()); // "Olá! Eu peso 85 kg!"
console.log(pessoa.mostrarAltura()); // "Olá! Eu tenho 1.80 m de altura!"

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
console.log(pessoa.mostrarIdade()); // "Olá! Tenho 22 anos!"

pessoa.andar(100);
pessoa.andar(200);
pessoa.andar(300);

console.log(pessoa.andando); // true

pessoa.parar();
console.log(pessoa.andando); // false

console.log(pessoa.metrosCaminhados); // 600

console.log(pessoa.apresentacao()); // "Olá, eu sou o Cauê Foyth, tenho 22 anos, 1.80 de altura, meu peso é 85 kg e, só hoje, eu já caminhei 600 metros!"