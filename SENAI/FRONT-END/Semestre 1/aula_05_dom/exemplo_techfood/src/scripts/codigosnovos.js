// SELETORES MODERNOS
// Busca pelo ID (usa # como no CSS)
const header = document.querySelector("#topo");
// Busca pela Classe (usa . como no CSS)
const btn = document.querySelector(".btn-enviar");
// Busca Combinada: O h3 que está dentro da div de ID 'card-nhoque'
const tituloPrato = document.querySelector("#card-nhoque h3");

// Seleciona TODOS os elementos que possuem a classe 'card'
const todosCards = document.querySelectorAll(".card");

// Mostra a quantidade de elementos encontrados
console.log(todosCards.length); // Exibe 6

const tituloNhoque = document.querySelector("#card-nhoque h3");

const botoesCompra = document.querySelectorAll(".bt_pedido");

const terceiroCard = document.querySelector(".card:nth-child(3)"); // Atenção nessa seleção, se fosse 4, o console.log exibiria null, pois os cards são filhos de uma <div>, essa <div> acaba antes de chegar no quarto card

console.log("1. Mostrando o título do card NHOQUE (PELO ID): ", tituloNhoque);
console.log("2. Quantidade de botões de pedido: ", botoesCompra.length);
console.log("3. O terceiro card de uma class (.card): ", terceiroCard);

const data = new Date();
const hora = data.getHours();

const saudacao = document.querySelector("#boas-vindas");
const seuNome = document.querySelector("#nome");

saudacao.textContent =
  hora < 12
    ? "Bem-vindo, bom dia!"
    : hora > 12 && hora < 18
      ? "Bem-vindo, boa tarde!"
      : "Bem-vindo, boa noite!"; // Muda o texto "Carregando..." para o texto escrito --> Verifique no HTML e como fica no site.

seuNome.innerHTML = "Meu nome é <strong><em>Andrew</em></strong"; // Aceita texto padrão, mas aceita tags HTML no texto
