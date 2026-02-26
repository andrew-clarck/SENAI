class Prato {
  constructor(nome, preco) {
    ((this.nome = nome), (this.preco = preco));
  }

  exibirComoMoeda(total) {
    return `R$${total.toFixed(2)}`
  }
}

const lasanha = new Prato("Lasanha Bolonhesa", 45.0);

alert("Seja bem-vindo ao restaurante Sabor e Saber!");

console.log("Teste");

const cliente = prompt(
  "Bem-vindo cliente, para um atendimento personalizado, digite o seu nome:",
);

let nomeFormatado = cliente.trim().toUpperCase();

alert(`Bem-vindo, ${nomeFormatado}!`);

const horaAgora = new Date();

const hora = horaAgora.getHours();

if (hora < 11) {
  alert(`Bom dia, ${nomeFormatado}! Aproveite as delícias do café da manhã.`);
  console.log("Antes das 11:00");
} else {
  alert(`Boa tarde, ${nomeFormatado}! Aproveite as iguarias do almoço!`);
  console.log("Depois das 11:00");
}

const querPrato = confirm(
  `Querido ${nomeFormatado}, gostaria de um prato surpresa?`,
);

if (querPrato) {
  let quantidade = prompt(
    "Hoje, temos Lasanha Bolonhesa disponível, quantas você gostaria?",
  );
  let totalValor = lasanha.preco * quantidade;

  alert(`Seu pedido tem um valor total de ${lasanha.exibirComoMoeda(totalValor)}`);
} else {
  alert("Ok, obrigado pela visita, volte sempre!");
}
