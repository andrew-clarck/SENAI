/* ==========================================================
   AULA 06: EVENTOS DOM - PROJETO ECOCYCLE
   ========================================================== */

// 1. SIMULADOR DE ÁGUA (Evento 'input' para cálculo em tempo real)
const inputPapel = document.querySelector("#input-papel");
const resultadoAgua = document.querySelector("#txt-resultado strong");

if (inputPapel && resultadoAgua) {
  inputPapel.addEventListener("input", () => {
    // Conversão do valor digitado para número
    const kg = Number(inputPapel.value);

    // Regra de negócio: 1kg de papel reciclado poupa cerca de 10L de água
    const totalAgua = kg * 10;

    // Atualiza o ecrã com o resultado
    resultadoAgua.textContent = totalAgua;
  });
}

// 2. CONTROLO DO VÍDEO (Evento 'click' isolado)
const btnVideo = document.querySelector("#btn-video");
const thumbnail = document.querySelector("#thumb-video");

if (btnVideo && thumbnail) {
  btnVideo.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do botão

    // Oculta a imagem (z-index 2) revelando o iframe do YouTube por trás
    thumbnail.style.display = "none";

    // Altera o texto do botão para feedback visual
    btnVideo.textContent = "A reproduzir...";
    btnVideo.style.backgroundColor = "#555";
    btnVideo.disabled = true;
  });
}

// 3. EFEITOS VISUAIS NOS BOTÕES DE LEITURA (Eventos 'mouseover' / 'mouseout')
const todosBotoes = document.querySelectorAll(".btn-leitura");

todosBotoes.forEach((botao) => {
  // Apenas aplica o efeito hover se não for o botão do vídeo (que fica cinzento ao clicar)
  if (botao.id !== "btn-video") {
    botao.addEventListener("mouseover", () => {
      botao.style.backgroundColor = "#27ae60"; // Verde mais claro/vibrante
      botao.style.transform = "scale(1.02)";
    });

    botao.addEventListener("mouseout", () => {
      botao.style.backgroundColor = "#1b5e20"; // Volta ao verde original
      botao.style.transform = "scale(1)";
    });

    // Alerta de leitura em todos os outros botões
    botao.addEventListener("click", (event) => {
      event.preventDefault();
      alert("A redirecionar para o artigo completo...");
    });
  }
});

/* ==========================================================
   AULA 07: DOM AVANÇADO - PROJETO ECOCYCLE
========================================================== */

// 1. Navegação na Árvore
const listaNoticias = document.querySelector(".lista-noticias")

console.log(listaNoticias.children.length)

listaNoticias.firstElementChild.classList.add("noticia-destaque")

listaNoticias.firstElementChild.nextElementSibling.querySelector("h2").textContent = "Notícia em Alta"

// 2. Criando elementos dinamicamente
function adicionarNoticia(titulo, descricao){
  const card = document.createElement("article")
  card.classList.add("card-noticia")

  card.innerHTML = 
  `<h2>${titulo}</h2>
  <p>${descricao}</p>
  <button class="btn-leitura">Leia Mais</button>`

  listaNoticias.prepend(card)
}