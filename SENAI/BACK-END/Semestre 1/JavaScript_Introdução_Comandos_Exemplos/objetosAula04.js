///////////////////////////////////////////////////////
/* Sem criação de classe */
// const pessoa = {
//     nome: "Andrew",
//     idade: 16,
//     falar: function() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// };

// pessoa.falar();

// const pessoa1 = {
//     nome: "Maria",
//     idade: 26,
//     falar: function() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// };

// pessoa1.falar();

// const pessoa2 = {
//     nome: "Renato",
//     idade: 18,
//     falar: function() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// };

// pessoa2.falar();

// const pessoa3 = {
//     nome: "Ana",
//     idade: 42,
//     falar: function() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// };

// pessoa3.falar();
///////////////////////////////////////////////////////
/* Com criação de classe */

// Definição de uma classe (modelo)
// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   saudar() {
//     return console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//   }
// }

// // Criação de instâncias da classe Pessoa
// const pessoa1 = new Pessoa("Andrew", 16); //pessoa1 é uma instância da classe Pessoa
// const pessoa2 = new Pessoa("Mago", 16); //pessoa2 é outra instância da classe Pessoa

// // Acesso às propriedades e chamada dos métodos das instâncias
// pessoa1.saudar(); // Saída: Oi, meu nome é Andrew e tenho 16 anos.
// pessoa2.saudar(); // Saída: Oi, meu nome é Mago e tenho 16 anos.

class Conta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito realizado. Saldo atual: R$${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque realizado. Saldo atual: R$${this.saldo}`);
    } else {
      return console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo}`);
    }
  }
}

let conta1 = new Conta("Andrew", 0);

conta1.depositar(2000);
setTimeout(() => {
  conta1.sacar(200);
}, 1000);
setTimeout(() => {
  conta1.sacar(51800);
}, 2000);
