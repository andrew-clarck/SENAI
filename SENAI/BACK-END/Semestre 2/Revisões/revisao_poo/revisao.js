/* =============================================
EXERCÍCIO 1 - CLASSE SIMPLES (Pessoa)

Enunciado:
Crie uma classe chamada Pessoa que possua:
- nome
- idade

Crie um método apresentar() que exiba no console
o nome e a idade da pessoa
============================================== */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome,
    this.idade = idade
  }

  apresentar() {
    console.log(`
            Nome: ${this.nome}
            Idade: ${this.idade}`);
  }
}

const pessoa1 = new Pessoa("Andrew", 16);

pessoa1.apresentar();

/* =============================================
EXERCÍCIO 2 - CLASSE SIMPLES (Produto)

Enunciado:
Crie uma classe chamada Produto que possua:
- nome
- preco

Crie um método mostrarPreco() que exiba no console
o nome do produto e seu preço
============================================== */

class Produto {
  constructor(nome, preco) {
    this.nome = nome, 
    this.preco = preco
  }

  mostrarPreco() {
    console.log(`
            Nome do Produto: ${this.nome}
            Preço: R$${this.preco.toFixed(2)}`);
  }
}

const produto1 = new Produto("Frango", 19.90);

produto1.mostrarPreco();


/* =============================================
EXERCÍCIO 3 - HERANÇA (Funcionário)

Enunciado:
Crie uma classe Funcionario com:
- nome

Crie uma classe Gerente que herda de Funcionario e possui:
- setor

Crie um método que exiba no console
o nome e o setor do gerente.
============================================== */

class Funcionario {
    constructor(nome) {
        this.nome = nome
    }
}

class Gerente extends Funcionario {
    constructor(nome, setor) {
        super(nome),
        this.setor = setor
    }

    mostrarDados() {
        console.log(`
            Nome: ${this.nome}
            Setor: ${this.setor}`)
    }
}

const gerente1 = new Gerente("Celso", "DP")

gerente1.mostrarDados()


/* =============================================
EXERCÍCIO 4 - HERANÇA (Veículo)

Enunciado:
Crie uma classe Veículo com:
- marca

Crie uma classe Carro que herda de Veiculo e possui:
- modelo

Crie um método que exiba no console
a marca e o modelo do carro.
============================================== */

class Veiculo {
    constructor(marca) {
        this.marca = marca
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca)
        this.modelo = modelo
    }

    exibirDados() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}`
        )    
    }
}

const carro1 = new Carro("Toyota", "Corolla Cross")

carro1.exibirDados()

/* =============================================
EXERCÍCIO 5 - ENCAPSULAMENTO (Conta)

Enunciado:
Crie uma classe Conta onde:
- o saldo seja um atributo privado
- exista um método depositar(valor)
- exista um método mostrarSaldo()
============================================= */

class Conta {
    #saldo
    constructor() {
        this.#saldo = 0
    }

    depositar(valor) {
        if(valor <= 0) {
            // throw Error(`Você está tentando depositar um valor inválido, tente novamente.`) - Exemplo de como fazer dar erro
            console.log(`Você está tentando depositar um valor inválido, tente novamente.`)
        } else {
            this.#saldo += valor;
            console.log(`Valor depositado. Saldo Atual: R$${this.#saldo.toFixed(2)}`)
        }        
    }

    mostrarSaldo() {
        console.log(`Saldo: R$${this.#saldo.toFixed(2)}`)
    }
}

const conta1 = new Conta()

conta1.mostrarSaldo()
conta1.depositar(1850)
conta1.depositar(-10)
conta1.mostrarSaldo()

/* =============================================
EXERCÍCIO 6 - ENCAPSULAMENTO (Aluno)

Enunciado:
Crie uma classe Aluno onde:
- a nota seja um atributo privado
- exista um método definirNota(nota)
- exista um método mostrarNota()
============================================= */

class Aluno {
    #nota
    constructor() {
        this.#nota = null
    }

    definirNota(nota) {
        if(nota < 0 || nota > 10) {
            console.log("Nota inválida.")
        } else {
            this.#nota = nota
            console.log("Nota definida.")
        }
    }

    mostrarNota() {
        if(this.#nota === null) {
            console.log("O aluno não possui uma nota.")
        } else {
            console.log(`Nota: ${this.#nota.toFixed(1)}`)
        }
    }

    validarAluno() {
        if(this.#nota === null) {
            return "O aluno não pode ser classificado pois não possui uma nota."
        }
        if(this.#nota >= 7 && this.#nota <= 10) {
            console.log("Aprovado.")
        }
        if(this.#nota >= 5 && this.#nota < 7) {
            console.log("Recuperação.")
        } else {
            console.log("Reprovado.")
        } 
    }
}

const aluno1 = new Aluno()

aluno1.mostrarNota()
aluno1.validarAluno()
aluno1.definirNota(-1)
aluno1.definirNota(10.1)
aluno1.mostrarNota()
aluno1.definirNota(7)
aluno1.mostrarNota()

aluno1.validarAluno()
aluno1.definirNota(5)
aluno1.validarAluno()
aluno1.definirNota(0)
aluno1.validarAluno()