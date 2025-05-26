class bankAccount {
    name;
    #balance;
    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    deposit(value) {
        if (value <= 0) {
            throw new Error("Depositos devem ser maiores que 0.");
        }
        this.#balance += value;
    }

    getBalance() {
        return this.#balance;
    }

    withdraw(value) {
        if (value <= 0) {
            throw new Error("Saques devem ser maiores que 0.");
        }
        if (value > this.#balance) {
            throw new Error("Saldo insuficiente.");
        }
        this.#balance -= value;
    }
}


try {
    let contaJoao = new bankAccount("João", 0);
    console.log(`Conta criada para ${contaJoao.name} com saldo inicial de R$ ${contaJoao.getBalance()}`);

    contaJoao.deposit(500);
    console.log(`Saldo atual de ${contaJoao.name}: R$ ${contaJoao.getBalance()}`);

    contaJoao.withdraw(200);
    console.log(`Saldo após saque de R$ 200: R$ ${contaJoao.getBalance()}`);

    contaJoao.withdraw(1000);
} catch (error) {
    console.error(`Erro: ${error.message}`);
}