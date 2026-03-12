const inputQtd = document.querySelector("#qtd-lasanha");
const precoTexto = document.querySelector("#preco-lasanha");

if (inputQtd && precoTexto) {
  inputQtd.addEventListener("input", function () {
    const precoUnitario = 45.0;
    const total = (Number(inputQtd.value) * precoUnitario).toFixed(2);
    precoTexto.textContent = `R$ ${total}`;
  });
}
