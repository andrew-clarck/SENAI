/* 1 */
class Produto {
  constructor(nome, preco, quantidadeEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
  }
  valorTotal() {
    let valor = this.preco * this.quantidadeEstoque;
    console.log(`O valor total do estoque é: R$${valor}`);
  }
}

let produto1 = new Produto("Café", 50, 10);
produto1.nome = "Pão";
produto1.valorTotal();

/* 2 */
class Filme {
  constructor(titulo, diretor, anoLancamento) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.anoLancamento = anoLancamento;
  }

  apresentacaoFilme() {
    return console.log(
      `O filme ${this.titulo} foi lançado em ${this.anoLancamento} e dirigido por ${this.diretor}`
    );
  }
}

let filme1 = new Filme("John Wick – De Volta ao Jogo", "Chad Stahelski", 2014);

filme1.apresentacaoFilme();

/* 3 */
class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  media() {
    return (this.nota1 + this.nota2) / 2;
  }

  validarAprovacao() {
    if (this.media() >= 7) {
      return console.log("Você está aprovado.");
    } else {
      return console.log("Você está reprovado.");
    }
  }
}

let aluno1 = new Aluno("Andrew", 10, 7);

console.log(`A sua média é: ${aluno1.media()}`);
aluno1.validarAprovacao();

/* 4 */
class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  areaRetangulo() {
    return console.log(`A área do retângulo é: ${this.base * this.altura}cm².`);
  }

  perimetroRetangulo() {
    return console.log(
      `O perímetro do retângulo é: ${this.base * 2 + this.altura * 2}cm`
    );
  }
}

let retangulo1 = new Retangulo(10, 5);

retangulo1.areaRetangulo();
retangulo1.perimetroRetangulo();

/* 5 */
class Carro {
  constructor(marca, modelo, combustivel) {
    this.marca = marca;
    this.modelo = modelo;
    this.combustivel = combustivel;
  }

  abastecer(litros) {
    return (this.combustivel += litros);
  }

  dirigir(km) {
    let litrosGastos = km / 10;
    if (litrosGastos <= this.combustivel) {
      this.combustivel -= litrosGastos;
      console.log(
        `Você gastou ${litrosGastos} litros ao andar ${km}km. Quantidade no tanque: ${this.combustivel} Litros`
      );
    } else {
      console.log(
        `Você não tem gasolina o suficiente para dirigir essa quantidade. Combustível no tanque: ${this.combustivel} Litros`
      );
    }
  }
}

let carro1 = new Carro("Honda", "Civic Touring 1.5 Turbo G10", 0);

console.log(
  `Carro abastecido. Quantidade no tanque: ${carro1.abastecer(11)} Litros.`
);
console.log(
  `Carro abastecido. Quantidade no tanque: ${carro1.abastecer(1)} Litros.`
);
carro1.dirigir(100);
carro1.dirigir(100);
