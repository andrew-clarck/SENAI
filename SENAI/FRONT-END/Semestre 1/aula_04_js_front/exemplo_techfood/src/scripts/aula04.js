// class Prato {
//   constructor(nome, preco) {
//     ((this.nome = nome), (this.preco = preco));
//   }

//   exibirComoMoeda(total) {
//     return `R$${total.toFixed(2)}`
//   }
// }

// const lasanha = new Prato("Lasanha Bolonhesa", 45.0);

// alert("Seja bem-vindo ao restaurante Sabor e Saber!");

// console.log("Teste");

// const cliente = prompt(
//   "Bem-vindo cliente, para um atendimento personalizado, digite o seu nome:",
// );

// let nomeFormatado = cliente.trim().toUpperCase();

// alert(`Bem-vindo, ${nomeFormatado}!`);

// const horaAgora = new Date();

// const hora = horaAgora.getHours();

// if (hora < 11) {
//   alert(`Bom dia, ${nomeFormatado}! Aproveite as delícias do café da manhã.`);
//   console.log("Antes das 11:00");
// } else {
//   alert(`Boa tarde, ${nomeFormatado}! Aproveite as iguarias do almoço!`);
//   console.log("Depois das 11:00");
// }

// const querPrato = confirm(
//   `Querido ${nomeFormatado}, gostaria de um prato surpresa?`,
// );

// if (querPrato) {
//   let quantidade = prompt(
//     "Hoje, temos Lasanha Bolonhesa disponível, quantas você gostaria?",
//   );
//   let totalValor = lasanha.preco * quantidade;

//   alert(`Seu pedido tem um valor total de ${lasanha.exibirComoMoeda(totalValor)}`);
// } else {
//   alert("Ok, obrigado pela visita, volte sempre!");
// }
// AULA 04 - EXEMPLOS DO MARLON
//////////////////////////////////////////////////////
// Estudo próprio:
const botoes = document.getElementsByClassName("bt_pedido"); // Por ser classe, possui vários, por isso, o JS interpreta como uma "lista" - Este comando cria uma variável para os botões de pedido

// for (let i = 0; i < botoes.length; i++) {
//     botoes[i].addEventListener("click", function() {
//         alert("Pedido adicionado ao carrinho.");
//     });
// } // Percorre toda a lista de botões (ou seja, todos os botões), para fazer com que todos eles ativem o script quando clicados (addEventListener faz o trabalho de identificar o clique) - Script do navegador, vamos estilizar!

const popup = document.getElementById("popup"); // Cria uma variável que pega o elemento "popup" do HTML pelo seu id

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    popup.style.display = "block"; // Percorre a lista de botões e faz com que quando clicados, o popup mude seu display para block, tornando-o visível

    setTimeout(function () {
      popup.style.display = "none";
    }, 3000); // Adiciona um timer para que o popup volte a ficar "invisível"
  });
}
