/* 1 */
// const candidatos = {
// ana: true,
// bruno: false,
// carla: true,
// daniel: false
// };

// function verificarCandidato(nome, callback) {
//     if (callback(nome) == true) {
//         return `Candidato(a) aprovado(a) para a próxima fase`;
//     } else {
//         return `Candidato(a) reprovado(a)`;
//     }
// }

// function checarCandidato(nome) {
//     if (candidatos[nome] == true) { // Podia ser apenas "if (candidatos[nome])", não precisa de "== true"
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(verificarCandidato("bruno", checarCandidato));
// console.log(verificarCandidato("carla", checarCandidato));

/* 2 */
// class Colaborador {
//     constructor(nome, cargo, salario) {
//         this.nome = nome;
//         this.cargo = cargo;
//         this.salario = salario;
//     }

//     aumentarSalario(percentual) {
//         return this.salario = this.salario + ((this.salario * percentual) / 100); // "return" não é necessário
//     }

//     exibirDados() {
//         return `
//         Nome: ${this.nome}
//         Cargo: ${this.cargo}
//         Salario: R$${this.salario.toFixed(2)}`
//     }
// }

// const colaborador1 = new Colaborador("Celso", "Professor", 6000);
// const colaborador2 = new Colaborador("Andrew", "Ajudante Geral", 1200);

// console.log(colaborador1.exibirDados());
// console.log(colaborador2.exibirDados());

// colaborador1.aumentarSalario(10);
// console.log(colaborador1.exibirDados());

/* 3 */
// class FolhaDePagamento {
//     constructor(nomeColaborador, cargo, salarioBase, diasTrabalhados) {
//         this.nomeColaborador = nomeColaborador;
//         this.cargo = cargo;
//         this.salarioBase = salarioBase;
//         this.diasTrabalhados = diasTrabalhados;
//     }

//     calcularSalarioMensal() {
//         return this.salarioBase / 30 * this.diasTrabalhados;
//     }

//     resumoPagamento() {
//         return `
//         Nome do Colaborador: ${this.nomeColaborador}
//         Cargo: ${this.cargo}
//         Dias Trabalhados: ${this.diasTrabalhados}
//         Valor a Receber: R$${this.calcularSalarioMensal().toFixed(2)}`;
//     }
// }

// const folha1 = new FolhaDePagamento("Marlon", "Professor", 5199.20, 25);

// console.log(folha1.resumoPagamento());

/* 4 */
// class Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase) {
//         this.colaborador = colaborador;
//         this.dataInicio = dataInicio;
//         this.tipo = tipo;
//         this.salarioBase = salarioBase;
//     }

//     calcularSalario() {
//         return this.salarioBase;
//     }
// }

// class CLT extends Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase, bonusPercentual) {
//         super(colaborador, dataInicio, tipo, salarioBase);
//         this.bonusPercentual = bonusPercentual;
//     }

//     calcularSalario() {
//         if (this.bonusPercentual > 15) {
//             return `Bônus maior do que o limite. Limite: 15%`; // Podia apenas dar o bônus de 15%, ao invés de mostrar um erro, mas não está errado
//         } else {
//             return `R$${(this.salarioBase + (this.salarioBase * this.bonusPercentual) / 100).toFixed(2)}`;
//         }
//     }

//     detalhesContrato() {
//         return `
//         Colaborador: ${this.colaborador}
//         Data de Início: ${this.dataInicio}
//         Tipo: ${this.tipo}
//         Salario Base: R$${this.salarioBase.toFixed(2)}
//         Bônus: ${this.bonusPercentual}%
//         Salário com Bônus: ${this.calcularSalario()}`
//     }
// }

// class Estagiario extends Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase, horasSemanais) {
//         super(colaborador, dataInicio, tipo, salarioBase);
//         this.horasSemanais = horasSemanais;
//     }

//     calcularSalario() {
//         return `R$${(this.salarioBase + this.horasSemanais * 20).toFixed(2)}`;
//     }

//     detalhesContrato() {
//         return `
//         Colaborador: ${this.colaborador}
//         Data de Início: ${this.dataInicio}
//         Tipo: ${this.tipo}
//         Salario Base: R$${this.salarioBase.toFixed(2)}
//         Horas Semanais: ${this.horasSemanais}
//         Salário com Horas Semanais: ${this.calcularSalario()}`
//     }
// }

// const clt1 = new CLT("Andrew", "1 de Janeiro de 2025", "CLT", 1200, 10);
// const clt2 = new CLT("Adrian", "20 de Março de 2025", "CLT", 1200, 16);
// const estagiario1 = new Estagiario("Enzo", "22 de Maio de 2025", "Estagiário", 2000, 30);

// console.log(clt1.detalhesContrato());
// console.log(clt2.detalhesContrato());
// console.log(estagiario1.detalhesContrato());

/* 5 */
// class Funcionario {
//   constructor(nome, salarioBase) {
//     this.nome = nome;
//     this.salarioBase = salarioBase;
//   }

//   calcularSalario() {
//     return this.salarioBase;
//   }
// }

// class AssistenteRH extends Funcionario {
//   calcularSalario() {
//     return this.salarioBase + (this.salarioBase * 5) / 100;
//   }
// }

// class AnalistaRH extends Funcionario {
//   calcularSalario() {
//     return this.salarioBase + (this.salarioBase * 15) / 100;
//   }
// }

// class GerenteRH extends Funcionario {
//   calcularSalario() {
//     return this.salarioBase + 3000;
//   }
// }

// const listaFuncionarios = [
//     new AssistenteRH("Andrew", 2000),
//     new AnalistaRH("Matheus", 5000),
//     new GerenteRH("Fernando", 17000),
//     new AssistenteRH("Pedro", 2100),
//     new GerenteRH("Celso", 30000),
// ]

// for (let i = 0; i < listaFuncionarios.length; i++) {
//     console.log(`Nome: ${listaFuncionarios[i].nome} - Salário: R$${listaFuncionarios[i].calcularSalario()}`);
// }

/* 6 */
class BancoDeHoras {
  #horas;
  // "colaborador;" - pode e é melhor ser colocado, para identificar todos os atributos
  constructor(horas, colaborador) {
    this.#horas = horas;
    this.colaborador = colaborador;
  }

  adicionarHoras(qtd) {
    if (qtd >= 0) {
      return (this.#horas += qtd);
    } else {
      return console.log(`Impossível adicionar horas negativas.`); // console.log dentro do método para mostrar erro, logo, é válido. (Nunca colocar console.log em método se não for para mostrar erro)
    }
  }

  retirarHoras(qtd) {
    if (this.#horas - qtd < 0) {
      return console.log(
        `Quantidade de horas muito elevada, saldo negativo, tente novamente.` // console.log dentro do método para mostrar erro, logo, é válido. (Nunca colocar console.log em método se não for para mostrar erro)
      );
    } else {
      return (this.#horas -= qtd);
    }
  }

  get consultarHoras() {
    return `
    Nome: ${this.colaborador}
    Horas: ${this.#horas}`;
  }
}

const banco1 = new BancoDeHoras(10, "Andrew");

console.log(banco1.consultarHoras);

banco1.adicionarHoras(10);
banco1.retirarHoras(5);
console.log(banco1.consultarHoras);

banco1.adicionarHoras(-1);
banco1.retirarHoras(20);