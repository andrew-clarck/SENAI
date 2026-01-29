/* 1 */
// function verificarEstoque(produto, quantidade, callback) {
//     if (callback(produto, quantidade) == true) {
//         return "Pedido aprovado";
//     } else {
//         return "Estoque insuficiente.";
//     }
// }

// function validarEstoque(produto, quantidade) {
//     if (quantidade > estoque[produto]) {
//         return false;
//     } else {
//         return true;
//     }
// }

// const estoque = {
//     caixa: 50,
//     palete: 10,
//     empilhadeira: 2
// };

// console.log(verificarEstoque("caixa", 50, validarEstoque));
/* 2 */
// class Produto {
//     constructor(nome, preco, quantidade) {
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }

//     valorTotal() {
//         return this.preco * this.quantidade;
//     }

//     reporEstoque(qtd) {
//         this.quantidade += qtd;
//     }
// }

// const produto1 = new Produto("Café", 30, 2);

// console.log(`R$${produto1.valorTotal()}`);
// produto1.reporEstoque(4)
// console.log(`R$${produto1.valorTotal()}`);

/* 3 */
// class Pedido {
//     constructor(numeroPedido, produto, quantidade, preco) {
//         this.numeroPedido = numeroPedido;
//         this.produto = produto;
//         this.quantidade = quantidade;
//         this.preco = preco;
//     }

//     valorTotal() {
//         return this.preco * this.quantidade;
//     }

//     resumoPedido() {
//         return `Resumo do pedido:
//         Nº Pedido: ${this.numeroPedido}.
//         Nome do produto: ${this.produto}.
//         Quantidade: ${this.quantidade}.
//         Valor total: R$${this.valorTotal()}`;
//     }
// }

// const pedido1 = new Pedido(12, "Coca-Cola", 2, 13);

// console.log(pedido1.resumoPedido());

/* 4 */
// class Veiculo {
//     constructor(placa, capacidade) {
//         this.placa = placa;
//         this.capacidade = capacidade;
//     }

//     podeTransportar(carga) {
//         if (carga > this.capacidade) {
//             return `Impossível transportar esse peso. Capacidade máxima: ${this.capacidade}kg`;
//         }
//         else {
//             return "Pode transportar";
//         }
//     }
// }

// class Van extends Veiculo {
//     constructor(motorista, placa, capacidade) {
//         super(placa, capacidade);
//         this.motorista = motorista;
//     }

//     podeTransportar(carga) {
//         if (carga > 5000) {
//             return `Impossível transportar esse peso. Capacidade máxima: ${this.capacidade}kg`;
//         }
//         else {
//             return "Pode transportar";
//         }
//     }
// }

// class Caminhao extends Veiculo {
//     constructor(motorista, eixos, placa, capacidade) {
//         super(placa, capacidade);
//         this.motorista = motorista;
//         this.eixos = eixos;
//     }

//     podeTransportar(carga) {
//         if (carga > (8000 * this.eixos)) {
//             return `Impossível transportar esse peso. Capacidade máxima: ${this.capacidade}kg`;
//         }
//         else {
//             return "Pode transportar.";
//         }
//     }
// }

// const van1 = new Van("Andrew", "ABCDE-123", 5000);
// const caminhao1 = new Caminhao("Celso", 3, "FGHIJ-456", 8000);

// console.log(van1.podeTransportar(5001));
// console.log(caminhao1.podeTransportar(24000));

/* 5 */
// class Funcionario {
//     constructor(nome, salarioBase) {
//         this.nome = nome;
//         this.salarioBase = salarioBase;
//     }
//     calcularSalario() {
//         return this.salarioBase;
//     }
// }

// class OperadorDeEmpilhadeira extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase);
//     }

//     calcularSalario() {
//         return this.salarioBase + ((this.salarioBase * 10) / 100 );
//     }
// }

// class GerenteDeLogistica extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase);
//     }

//     calcularSalario() {
//         return this.salarioBase + 2000;
//     }
// }

// const funcionario1 = new GerenteDeLogistica("Daniel", 3000);
// const funcionario2 = new OperadorDeEmpilhadeira("Matheus", 2000);
// const funcionario3 = new GerenteDeLogistica("Marlon", 5000);
// const funcionario4 = new GerenteDeLogistica("Celso", 4000);
// const funcionario5 = new OperadorDeEmpilhadeira("Andrew", 1000);

// let listaFuncionarios = [funcionario1, funcionario2, funcionario3, funcionario4, funcionario5];

// for (let i = 0; i < listaFuncionarios.length; i++) {
//     console.log(`Salário do funcionário ${listaFuncionarios[i].nome}: R$${listaFuncionarios[i].calcularSalario()}`);
// }

/* 6 */
// class Almoxarifado {
//   #quantidade;
//   constructor(nomeProduto, quantidade) {
//     this.nomeProduto = nomeProduto;
//     this.#quantidade = quantidade;
//   }

//   adicionarProduto(qtd) {
//     return (this.#quantidade += qtd);
//   }

//   retirarProduto(qtd) {
//     if (qtd > this.#quantidade) {
//       console.log(
//         `Impossível retirar do almoxarifado, quantidade maior do que disponível. Quantidade disponível: ${
//           this.#quantidade
//         }`
//       );
//     } else {
//       this.#quantidade -= qtd;
//     }
//   }

//   get consultarEstoque() {
//     return `Produto: ${this.nomeProduto}. Quantidade no estoque: ${
//       this.#quantidade
//     }`;
//   }
// }

// const almoxarifado1 = new Almoxarifado("Banana", 5);
// console.log(almoxarifado1.consultarEstoque);

// almoxarifado1.adicionarProduto(5);
// console.log(almoxarifado1.consultarEstoque);

// almoxarifado1.retirarProduto(9);
// console.log(almoxarifado1.consultarEstoque);
