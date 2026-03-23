//////////////////////////////////////////////////////
// Estudo próprio:
const botoes = document.querySelectorAll(".bt_pedido"); // Por ser classe, possui vários, por isso, o JS interpreta como uma "lista" - Este comando cria uma variável para os botões de pedido

const popup = document.querySelector("#popup"); // Cria uma variável que pega o elemento "popup" do HTML pelo seu id

// Quando o mouse fica por cima do botão, o estilo do hover é adicionado
botoes.forEach((botao) => {
  botao.addEventListener("mouseover", () => {
    botao.classList.add("bt_pedido_hover")
  });

  botao.addEventListener("mouseout", () => {
    botao.classList.remove("bt_pedido_hover")
  })
});

// PREÇO DINÂMICO
const inputQtd = document.querySelector("#qtd-lasanha");
const precoTexto = document.querySelector("#preco-lasanha");

if (inputQtd && precoTexto) {
  inputQtd.addEventListener("input", function () {
    const precoUnitario = 45.0;
    const total = (Number(inputQtd.value) * precoUnitario).toFixed(2);
    precoTexto.textContent = `R$ ${total}`;

    precoTexto.style.color = total > 150 ? "#c0392b" : total >= 90 ? "#e67e22" : "green";
  });
}

// Utilizando o forEach, é específico para a class botão, é melhor buscar o evento direto pela class
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    popup.classList.add("visivel"); // Faz o elemento popup ficar visível

    // Desativa o botão e adiciona estilização
    botao.classList.add("bt_pedido_desativado")
    botao.textContent = "✔ Pedido enviado"
    botao.disabled = true 

    botao.classList.remove("bt_pedido_hover") // Desativa o estilo do hover, dando a impressão do desligamento do botão
    

    setTimeout(function () {
      popup.classList.remove("visivel");
    }, 3000); // Adiciona um timer para que o popup volte a ficar "invisível"
  });
});