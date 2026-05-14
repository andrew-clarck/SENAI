// Garante que as funções serão apenas executadas na página depois que elea está carrregada
document.addEventListener("DOMContentLoaded", () => {
  exibirBoasVindas();
});

const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();

function exibirBoasVindas() {
  if (saudacao) {
    saudacao.textContent =
      hora < 12
        ? "Bom dia! Qual o seu pedido?"
        : "Boa tarde! Confira nosso cardápio.";
  }
}
