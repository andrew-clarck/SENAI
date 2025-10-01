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
  constructor() {}
}
