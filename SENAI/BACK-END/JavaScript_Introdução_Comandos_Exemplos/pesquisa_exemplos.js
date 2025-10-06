class Forma {
  constructor() {
    if (this.constructor === Forma) {
      throw new Error("Impossível instanciar essa classe");
    }
  }

  calcularArea() {
    throw new Error("O método calcularArea() deve ser implementado.");
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() { // Se não for "reescrito"(implementado), dará o erro escrito em "Forma".
    return this.lado * this.lado;
  }
}

// const forma1 = new Forma(); - Erro -> "Impossível instanciar essa classe".
const quadrado1 = new Quadrado(5);

console.log(`${quadrado1.calcularArea()}cm²`);


