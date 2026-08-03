class Bebida {
  constructor(nome, preco, volume) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }

  descricao() {
    return `${this.nome} - ${this.volume}ml - R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  emLitros() {
    const formatadoLitros = (this.volume / 1000).toFixed(2);
    return `${formatadoLitros}L`;
  }
}

const bebidas = [
  new Bebida("Monster Ultra Straberry Dreams", 9.9, 473),
  new Bebida("Redbull Tradicional", 7.9, 250),
  new Bebida("Baly Caipirinha do Brasil", 12.5, 2000),
];

bebidas.forEach((bebida) => {
  console.log(bebida.descricao());
});

bebidas.forEach((bebida) => {
  console.log(bebida.emLitros());
});

const containerBebidas = document.querySelector("#lista-bebidas");

function renderizarBebidas() {
  bebidas.forEach((bebida) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <p>${bebida.descricao()}</p>`;
    containerBebidas.appendChild(card);
  });
}

renderizarBebidas();
