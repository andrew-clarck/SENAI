class ContaBancaria {
  #saldo;
  numeroConta;

  constructor(saldo, numeroConta) {
    this.#saldo = saldo;
    this.numeroConta = numeroConta;
  }

  get getSaldo() {
    return this.#saldo;
  }

  set setSaldo(valor) {
    if (valor != null && valor > 0) {
      this.#saldo = valor;
    } else {
      console.log("Saldo inválido");
    }
  }
}

let conta = new ContaBancaria(100, "22052009");

conta.getSaldo = 30;
console.log(conta.numeroConta);
console.log(conta.getSaldo);

conta.setSaldo = 0;
console.log(conta.getSaldo);

class Animal {
  nome;
  constructor(nome) {
    this.nome = nome;
  }
  fazerSom() {
    console.log("Emite um som genérico");
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }
  fazerSom() {
    console.log("Auau");
  }
}

let cachorro = new Cachorro("Athena");
cachorro.fazerSom();
console.log(`Nome do cachorro: ${cachorro.nome}`);
