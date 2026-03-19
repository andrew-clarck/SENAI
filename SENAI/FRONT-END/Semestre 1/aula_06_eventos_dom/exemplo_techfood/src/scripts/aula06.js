// PREÇO DINÂMICO
const inputQtd = document.querySelector("#qtd-lasanha");
const precoTexto = document.querySelector("#preco-lasanha");

if (inputQtd && precoTexto) {
  inputQtd.addEventListener("input", function () {
    const precoUnitario = 45.0;
    const total = (Number(inputQtd.value) * precoUnitario).toFixed(2);
    precoTexto.textContent = `R$ ${total}`;

    precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";
  });
}

// Eventos de clique para CLASS - EVENT.TARGET

// Buscar na página toda
document.addEventListener("click", (event) => {
  const clicado = event.target
  // Fazer a ação/mudança/aplicação que você quiser, mediante o elemento que foi clicado
})

//Busca apenas na seção de MASSAS
const massas = document.querySelector("#section-massas")

massas.addEventListener("click", (event) => {
  const clicado = event.target

  if(clicado.classList.contains("bt_pedido")) {
    console.log("Você clicou em um botão de MASSAS!")
  }
})

// Buscar evento direto da class
const botoesPedido = document.querySelectorAll(".bt_pedido")

botoesPedido.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    botao.textContent = "✔ Pedido enviado"
    botao.style.backgroundColor = "red"
    botao.style.cursor = "default"
    botao.disabled = true
  })
})