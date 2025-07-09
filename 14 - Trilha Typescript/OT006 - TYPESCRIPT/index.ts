class Carro {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  descricao(): void {
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2021);
meuCarro.descricao();

//////////////////////////////////////////////////////////////

class CarroEletrico extends Carro {
  capacidadeBateria: number;

  constructor(marca: string, modelo: string, ano: number, capacidadeBateria: number) {
    super(marca, modelo, ano);
    this.capacidadeBateria = capacidadeBateria;
  }

  descricao(): void {
    super.descricao();
    console.log(`Capacidade da bateria: ${this.capacidadeBateria} kWh`);
  }
}

const tesla = new CarroEletrico("Tesla", "Model 3", 2022, 75);
tesla.descricao();
     

//////////////////////////////////////////////////////////////

class Conta {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  obterSaldo(): number {
    return this.saldo;
  }
}

const minhaConta = new Conta(1000);
minhaConta.depositar(500);
console.log("Saldo atual:", minhaConta.obterSaldo());

//////////////////////////////////////////////////////////////

class ContaBancaria {
  protected saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  calcularJuros(): number {
    return this.saldo * 0.01;
  }
}

class ContaCorrente extends ContaBancaria {
  calcularJuros(): number {
    return this.saldo * 0.005;
  }
}

const cc = new ContaCorrente(2000);
console.log("Juros Conta Corrente:", cc.calcularJuros()); // 10


//////////////////////////////////////////////////////////////

interface Motorizavel {
  ligarMotor(): void;
}

class Barco implements Motorizavel {
  ligarMotor(): void {
    console.log("Motor do barco ligado.");
  }
}

class Motocicleta implements Motorizavel {
  ligarMotor(): void {
    console.log("Motor da motocicleta ligado.");
  }
}

const barco = new Barco();
const moto = new Motocicleta();

barco.ligarMotor();
moto.ligarMotor();