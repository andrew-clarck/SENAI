/* ==========================================================
   AULA 06: EVENTOS DOM - PROJETO ECOCYCLE
   ========================================================== */

// 1 - Simulador de Impacto
const papel = document.querySelector("#input-papel");
const aguaPoupada = document.querySelector("#txt-resultado strong");

papel.addEventListener("input", () => {
  const qtdPapel = Number(papel.value);
  const agua = qtdPapel * 10;

  aguaPoupada.textContent = agua;
});

// 2 - Player Profissional
const btnVideo = document.querySelector("#btn-video");
const thumbVideo = document.querySelector("#thumb-video");

btnVideo.addEventListener("click", () => {
  thumbVideo.style.display = "none";

  btnVideo.textContent = "A reproduzir...";
  btnVideo.style.cursor = "default";
  btnVideo.disabled = true;
});

// 3 - Botões reativos
const botoesLeitura = document.querySelectorAll(".btn-leitura");

botoesLeitura.forEach((botao) => {
  botao.addEventListener("mouseover", () => {
    botao.style.backgroundColor = "#154918";
  });
  botao.addEventListener("mouseleave", () => {
    botao.style.backgroundColor = "";
  });
});
