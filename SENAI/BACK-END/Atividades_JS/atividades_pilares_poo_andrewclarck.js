/* Herança */
/* 1 */
// class InstrumentoMusical {
//   tocar() {
//     console.log("Tocando músicas genéricas");
//   }
// }

// class Violao extends InstrumentoMusical {
//   tocar() {
//     console.log("Tocando músicas para violão");
//   }
// }

// class Piano extends InstrumentoMusical {
//   tocar() {
//     console.log("Tocando músicas para piano");
//   }
// }

// const violao = new Violao();
// const piano = new Piano();

// piano.tocar();
// violao.tocar();

/* 2 */
// class Funcionario {
//   constructor(nome, salario) {
//     this.nome = nome;
//     this.salario = salario;
//   }
// }

// class Gerente extends Funcionario {
//   constructor(nome, salario, bonus) {
//     super(nome, salario);
//     this.bonus = bonus;
//   }
// }

// const gerente = new Gerente("Celso", 10000, 50);

/* 3 */
// class Veiculo {
//   constructor(marca, ano) {
//     this.marca = marca;
//     this.ano = ano;
//   }
// }

// class Carro extends Veiculo {
//   constructor(marca, ano, portas) {
//     super(marca, ano);
//     this.portas = portas;
//   }
// }

// class Moto extends Veiculo {
//   constructor(marca, ano, cilindradas) {
//     super(marca, ano);
//     this.cilindradas = cilindradas;
//   }
// }

// const carro = new Carro("Toyota", 2024, 4);
// const moto = new Moto("Suzuki", 2025, 750);

/* 4 */
// class Funcionario {
//   constructor(salarioBase) {
//     this.salarioBase = salarioBase;
//   }
//   calcularSalario() {
//     return this.salarioBase;
//   }
// }

// class Gerente extends Funcionario {
//   constructor(salarioBase) {
//     super(salarioBase);
//   }
//   calcularSalario() {
//     return this.salarioBase + (this.salarioBase * 30) / 100;
//   }
// }

// class Desenvolvedor extends Funcionario {
//   constructor(salarioBase) {
//     super(salarioBase);
//   }
//   calcularSalario() {
//     return this.salarioBase + (this.salarioBase * 20) / 100;
//   }
// }

// const gerente1 = new Gerente(10000);
// const desenvolvedor1 = new Desenvolvedor(5000);

// console.log(`Salário do gerente: R$${gerente1.calcularSalario()}`);
// console.log(`Salário do desenvolvedor: R$${desenvolvedor1.calcularSalario()}`);

/* 5 */
// class ContaBancaria {
//     constructor(titular, saldo) {
//         this.titular = titular;
//         this.saldo = saldo;
//     }
//     depositar(valor) {
//         return `Valor depositado. Saldo atual: R$${this.saldo += valor}`;
//     }
//     sacar(valor) {
//         let valorRetirado = this.saldo - valor;
//         if (valorRetirado < 0) {
//             return `Saldo indisponível. Saldo atual: R$${this.saldo}`;
//         } else {
//             this.saldo -= valor;
//             return `Valor sacado com sucesso: R$${valor}. Saldo atual: R$${this.saldo}`
//         }
//     }
// }

// class ContaCorrente extends ContaBancaria {
//     constructor(titular, saldo) {
//         super(titular, saldo);
//     }
//     sacar(valor) {
//         let valorRetirado = this.saldo - (valor + 2);
//         if (valorRetirado < 0) {
//             return `Saldo indisponível. Saldo atual: R$${this.saldo}`;
//         } else {
//             this.saldo -= (valor + 2);
//             return `Valor sacado com sucesso: R$${valor}. Saldo atual: R$${this.saldo}`
//         }
//     }
// }

// class ContaPoupanca extends ContaBancaria {
//     constructor(titular, saldo) {
//         super(titular, saldo);
//     }
//     atualizarSaldo() {
//         return this.saldo += (this.saldo * 5 / 100);
//     }
// }

// const contacorrente = new ContaCorrente("Daniel", 50000);
// const contapoupanca = new ContaPoupanca("Marlon", 100000);

// console.log(contacorrente.depositar(50000));
// console.log(contacorrente.sacar(10000));

// console.log(`Saldo antigo: R$${contapoupanca.saldo}. Saldo atual: R$${contapoupanca.atualizarSaldo()}`);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Encapsulamento */
/* 6 */
class Produto {
  #nome;
  #preco;

  constructor(nome, preco) {
    this.#nome = nome;
    this.#preco = preco;
  }
  get infoProduto() {
    if (this.#preco < 0) {
      return "Preço inválido, menor que zero.";
    } else {
      return `O produto ${this.#nome} custa R$${this.#preco}`;
    }
  }

  set mudarPreco(valor) {
    if (valor < 0) {
      console.log("Preço inválido, menor que zero.");
    } else {
      this.#preco = valor;
    }
  }

  set mudarNome(nome) {
    this.#nome = nome;
  }
}

const produto1 = new Produto("Café", 50);
const produto2 = new Produto("Chocolate", -20);

console.log(produto1.infoProduto);
console.log(`O novo nome do produto é: ${(produto1.mudarNome = "Torrone")}`);
console.log(`O novo preço do produto é: R$${(produto1.mudarPreco = 23)}`);
console.log(produto1.infoProduto);

console.log(produto2.infoProduto);
produto2.mudarPreco = -1;
