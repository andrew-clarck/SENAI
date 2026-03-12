//////////////////////////////////////////////////////
// Estudo próprio:
const botoes = document.querySelectorAll(".bt_pedido"); // Por ser classe, possui vários, por isso, o JS interpreta como uma "lista" - Este comando cria uma variável para os botões de pedido

const popup = document.querySelector("#popup"); // Cria uma variável que pega o elemento "popup" do HTML pelo seu id

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    popup.classList.add("visivel"); // Percorre a lista de botões e faz com que quando clicados, o popup mude seu display para block, tornando-o visível

    setTimeout(function () {
      popup.classList.remove("visivel");
    }, 3000); // Adiciona um timer para que o popup volte a ficar "invisível"
  });
}
