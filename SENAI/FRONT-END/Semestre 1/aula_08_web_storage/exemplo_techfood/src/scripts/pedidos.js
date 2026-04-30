document.addEventListener("DOMContentLoaded", () => {
  renderizarPedidos();
});

function renderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos");
  const spanTotal = document.querySelector("#valor-total");
  const spanResumo = document.querySelector("#valor-total-resumo");
  const spanContador = document.querySelector("#contador-itens");

  if (lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  if (pedidos.length === 0) {
    lista.innerHTML =
      `<li class="pedido-vazio"> Nenhum pedido ainda, Acesse o ` +
      `<a href="index.html"> Cardápio </a> Para Adicionar! </li>`;

    if (spanTotal) spanTotal.textContent = "R$ 0,00";
    if (spanResumo) spanResumo.textContent = "R$ 0,00";
    if (spanContador) spanContador.textContent = "0 Itens";
  }

  lista.innerHTML = "";
  let total = 0;

  const textoSpan = document.createElement("span");
  textoSpan.innerHTML = ``;

  // Continua...
}
