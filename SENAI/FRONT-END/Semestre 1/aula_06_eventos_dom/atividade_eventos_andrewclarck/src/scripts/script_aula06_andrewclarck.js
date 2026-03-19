// Interação (Clique)
const curtida = document.querySelector("#btn-curtir");
const contador = document.querySelector("#contador");
let contagemCurtidas = 0;

curtida.addEventListener("click", () => {
  contagemCurtidas += 1;
  contador.textContent = contagemCurtidas;
});

// Monitoramento (Input)
const texto = document.querySelector("#campo-texto");
const preview = document.querySelector("#preview-texto");

texto.addEventListener("keyup", () => {
  preview.textContent = texto.value;
});

// Sensores (Mouse)
const caixa = document.querySelector("#caixa-cor");

caixa.addEventListener("mouseover", () => {
  caixa.style.backgroundColor = "blue";
});

caixa.addEventListener("mouseout", () => {
  caixa.style.backgroundColor = "";
});

// Desafio Extra
const reset = document.querySelector("#btn-reset");

reset.addEventListener("click", () => {
  contagemCurtidas = 0;
  contador.textContent = contagemCurtidas;
  texto.value = "";
  preview.textContent = "Digitando: ...";
});
