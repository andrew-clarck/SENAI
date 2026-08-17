document.addEventListener("DOMContentLoaded", () => {
  renderizarCardapio();
  aplicarDescontoPrato("Feijoada", 50);
});

class Prato {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}

const cardapio = [
  new Prato("Feijoada", 25.5, "Prato Principal"),
  new Prato("Salada Caesar", 15.0, "Entrada"),
  new Prato("Picanha Grelhada", 35.0, "Prato Principal"),
  new Prato("Palha Italiana", 12.0, "Sobremesa"),
  new Prato("Tubaína Schincariol 2L", 8.0, "Bebida"),
];

console.log("=== Cardápio ===");
cardapio.forEach((p) => {
  console.log(`${p.nome} - ${p.formatarPreco()} (${p.categoria})`);
});

const containerCardapio = document.querySelector("#cardapio");

function criarCardPrato(prato) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${prato.nome}</h3>
    <p class="categoria">${prato.categoria}</p>
    <p class="preco">${prato.formatarPreco()}</p>`;

  card.addEventListener("click", () => {
    alert(
      `🍽️${prato.nome} \n\nCategoria: ${prato.categoria}\nPreço: ${prato.formatarPreco()}`,
    );
  });
  return card;
}

function renderizarCardapio() {
  containerCardapio.innerHTML = "";
  cardapio.forEach((prato) => {
    const card = criarCardPrato(prato);
    containerCardapio.appendChild(card);
  });
}

function aplicarDescontoPrato(nomePrato, percentual) {
  const prato = cardapio.find((prato) => prato.nome === nomePrato);
  if (prato) {
    prato.aplicarDesconto(percentual);
    renderizarCardapio();
  }
}
