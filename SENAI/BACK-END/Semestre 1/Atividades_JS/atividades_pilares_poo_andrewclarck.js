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
// console.log(contacorrente.sacar(100000));

// console.log(`Saldo antigo: R$${contapoupanca.saldo}. Saldo atual: R$${contapoupanca.atualizarSaldo()}`);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Encapsulamento */
/* 6 */
// class Produto {
//   #nome;
//   #preco;

//   constructor(nome, preco) {
//     this.#nome = nome;
//     this.#preco = preco;
//   }
//   get infoProduto() {
//     if (this.#preco < 0) {
//       return "Preço inválido, menor que zero.";
//     } else {
//       return `O produto ${this.#nome} custa R$${this.#preco}`;
//     }
//   }

//   set mudarPreco(valor) {
//     if (valor < 0) {
//       console.log("Preço inválido, menor que zero.");
//     } else {
//       this.#preco = valor;
//     }
//   }

//   set mudarNome(nome) {
//     this.#nome = nome;
//   }
// }

// const produto1 = new Produto("Café", 50);
// const produto2 = new Produto("Chocolate", -20);

// console.log(produto1.infoProduto);
// console.log(`O novo nome do produto é: ${(produto1.mudarNome = "Torrone")}`);
// console.log(`O novo preço do produto é: R$${(produto1.mudarPreco = 23)}`);
// console.log(produto1.infoProduto);

// console.log(produto2.infoProduto);
// produto2.mudarPreco = -1;

/* 7 */
// class Carro {
//   #velocidade;

//   constructor(velocidade) {
//     this.#velocidade = velocidade;
//   }

//   set acelerar(num) {
//     this.#velocidade += num * 10;
//     console.log(`Você acelerou seu carro ${num} vezes. Velocidade atual: ${this.#velocidade}km/h`);
//   }

//   set frear(num) {
//     this.#velocidade -= num * 10;
//     if (this.#velocidade < 0) {
//       this.#velocidade = 0;
//       console.log(`Você freou o seu carro ${num} vezes. Velocidade atual: ${this.#velocidade}km/h`);
//     } else {
//       console.log(`Você freou o seu carro ${num} vezes. Velocidade atual: ${this.#velocidade}km/h`);
//     }
//   }
// }

// const carro1 = new Carro(20);

// carro1.acelerar = 1;
// carro1.frear = 2;

/* 8 */
// class Conta {
//   #saldo;
//   constructor(saldo) {
//     this.#saldo = saldo;
//   }
//   set depositar(valor) {
//     if (valor <= 0) {
//       console.log(`Insira um valor positivo para depositar. Saldo atual: R$${this.#saldo}`);
//     } else {
//       this.#saldo += valor;
//       console.log(`Valor depositado. Saldo atual: R$${this.#saldo}`);
//     }
//   }
//   set sacar(valor) {
//     let valorRetirado = this.#saldo - valor;
//     if (valorRetirado < 0) {
//       console.log(`Impossível realizar saque: Saldo indisponível. Saldo atual: R$${this.#saldo}`);
//     } else {
//       this.#saldo -= valor;
//       console.log(`Valor sacado com sucesso: R$${valor}. Saldo atual: R$${this.#saldo}`);
//     }
//   }
// }

// const conta1 = new Conta(100);

// conta1.depositar = 10;
// conta1.depositar = 0;
// conta1.sacar = 60;
// conta1.sacar = 51;

/* 9 */
// class Usuario {
//   #senha;
//   constructor(nome, senha) {
//     this.nome = nome;
//     this.#senha = senha;
//   }
//   validarSenha(senhaDigitada) {
//     if (senhaDigitada === this.#senha) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const usuario1 = new Usuario("Andrew", "Banana123");

// console.log(usuario1.validarSenha("Banana123"));
// console.log(usuario1.validarSenha("Banana23"));

/* 10 */
// class Retangulo {
//   #largura;
//   #altura;
//   constructor(largura, altura) {
//     this.#largura = largura;
//     this.#altura = altura;
//   }

//   get getArea() {
//     return `A área do retângulo é: ${this.#largura * this.#altura}cm²`;
//   }

//   get getPerimetro() {
//     return `O perímetro do retângulo é: ${this.#largura * 2 + this.#altura * 2}cm`;
//   }
// }

// const retangulo1 = new Retangulo(10, 5);

// console.log(retangulo1.getArea);
// console.log(retangulo1.getPerimetro);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Polimorfismo */
/* 11 */
// class Forma {
//   calcularArea() {
//     return "Cálculo de área";
//   }
// }

// class Quadrado extends Forma {
//   constructor(lado) {
//     super();
//     this.lado = lado;
//   }
//   calcularArea() {
//     const area = this.lado * this.lado;
//     return `A área do quadrado é: ${area}cm²`
//   }
// }

// class Retangulo extends Forma {
//   constructor(base, altura) {
//     super();
//     this.base = base;
//     this.altura = altura;
//   }
//   calcularArea() {
//     const area = this.base * this.altura;
//     return `A área do retângulo é: ${area}cm²`;
//   }
// }

// class Circulo extends Forma {
//   constructor(raio) {
//     super();
//     this.raio = raio;
//   }
//   calcularArea() {
//     const area = 3.14 * (this.raio * this.raio);
//     return `A área do círculo é: ${area}cm²`;
//   }
// }

// const quadrado1 = new Quadrado(5);
// const retangulo1 = new Retangulo(10, 5);
// const circulo1 = new Circulo(3);

// console.log(quadrado1.calcularArea());
// console.log(retangulo1.calcularArea());
// console.log(circulo1.calcularArea());

/* 12 */
// class Funcionario {
//   trabalhar() {
//     return "Trabalhando";
//   }
// }

// class Professor extends Funcionario {
//   trabalhar() {
//     return "Ministrando aulas e corrigindo provas.";
//   }
// }

// class Engenheiro extends Funcionario {
//   trabalhar() {
//     return "Desenvolvendo projetos e supervisionando obras.";
//   }
// }

// class Designer extends Funcionario {
//   trabalhar() {
//     return "Criando layouts e materiais gráficos.";
//   }
// }

// const professor1 = new Professor();
// const engenheiro1 = new Engenheiro();
// const designer1 = new Designer();

// console.log(professor1.trabalhar());
// console.log(engenheiro1.trabalhar());
// console.log(designer1.trabalhar());

/* 13 */
// class Pagamento {
//   realizarPagamento() {
//     return "Pagamento realizado.";
//   }
// }

// class CartaoCredito extends Pagamento {
//   realizarPagamento() {
//     return "Pagamento realizado com cartão de crédito.";
//   }
// }

// class Bolet extends Pagamento {
//   realizarPagamento() {
//     return "Pagamento realizado através de boleto.";
//   }
// }

// class Pix extends Pagamento {
//   realizarPagamento() {
//     return "Pagamento realizado com Pix.";
//   }
// }

// const cartaocredito1 = new CartaoCredito();
// const boleto1 = new Boleto();
// const pix1 = new Pix();

// console.log(cartaocredito1.realizarPagamento());
// console.log(boleto1.realizarPagamento());
// console.log(pix1.realizarPagamento());

/* 14 */
// class Transporte {
//   mover() {
//     return "O transporte se move.";
//   }
// }

// class Carro extends Transporte {
//   mover() {
//     return "O carro anda pela estrada.";
//   }
// }

// class Bicicleta extends Transporte {
//   mover() {
//     return "A bicicleta anda pela ciclovia.";
//   }
// }

// class Aviao extends Transporte {
//   mover() {
//     return "O avião se move pelo ar.";
//   }
// }

// const carro1 = new Carro();
// const bicicleta1 = new Bicicleta();
// const aviao1 = new Aviao();

// console.log(carro1.mover());
// console.log(bicicleta1.mover());
// console.log(aviao1.mover());

/* 15 */
// class Mensagem {
//   enviar() {
//     return "Mensagem enviada.";
//   }
// }

// class Email extends Mensagem {
//   enviar() {
//     return "Email enviado.";
//   }
// }

// class SMS extends Mensagem {
//   enviar() {
//     return "SMS enviado.";
//   }
// }

// class WhatsApp extends Mensagem {
//   enviar() {
//     return "Mensagem enviada por WhatsApp.";
//   }
// }

// const email1 = new Email();
// const sms1 = new SMS();
// const whatsapp1 = new WhatsApp();

// console.log(email1.enviar());
// console.log(sms1.enviar());
// console.log(whatsapp1.enviar());