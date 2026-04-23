// 1. SAUDAÇÃO DINÂMICA (Baseada na hora atual)
const saudacao = document.querySelector("#boas-vindas"); // Seleciona o elemento de boas-vindas
const hora = new Date().getHours(); // Pega a hora atual (0 a 23)

if (saudacao) {
  // Verifica se o elemento existe
  saudacao.textContent =
    hora < 12
      ? "Bom dia! Qual o seu pedido?" // Antes do meio-dia
      : "Boa tarde! Confira nosso cardápio."; // Depois do meio-dia
}

// 2. INTERATIVIDADE NOS CARDS (efeito hover com mouse)
const cards = document.querySelectorAll(".card"); // Seleciona todos os cards

cards.forEach((card) => {
  // Quando o mouse entra no card
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)"; // Move o card levemente para cima
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"; // Adiciona sombra
  });

  // Quando o mouse sai do card
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"; // Volta para posição original
    card.style.boxShadow = "none"; // Remove sombra
  });
});

// 3. DELEGAÇÃO DE EVENTOS (escuta cliques dentro do <main>)
const main = document.querySelector("main");

main.addEventListener("click", (event) => {
  const clicado = event.target; // Elemento exato que foi clicado

  // 3.1 BOTÃO DE DIMINUIR QUANTIDADE
  if (clicado.classList.contains("btn-menos")) {
    const box = clicado.parentElement; // Container da quantidade
    const spanQtd = box.querySelector(".qtd-valor"); // Onde está o número
    const valorAtual = Number(spanQtd.textContent); // Converte para número

    // Diminui, mas nunca deixa menor que 1
    spanQtd.textContent = Math.max(1, valorAtual - 1);

    atualizarPrecoCard(box); // Atualiza o preço do card
    return; // Para a execução aqui
  }

  // 3.1 BOTÃO DE AUMENTAR QUANTIDADE
  if (clicado.classList.contains("btn-mais")) {
    const box = clicado.parentElement;
    const spanQtd = box.querySelector(".qtd-valor");

    spanQtd.textContent = Number(spanQtd.textContent) + 1; // Incrementa

    atualizarPrecoCard(box); // Atualiza o preço
    return;
  }

  // 3.2 BOTÃO "PEDIR AGORA"
  if (clicado.classList.contains("btn-pedido")) {
    event.preventDefault(); // Evita comportamento padrão (ex: link)

    const card = clicado.parentElement; // Card do produto
    const nomePrato = card.querySelector("h3").textContent; // Nome do prato
    const quantidade = card.querySelector(".qtd-valor").textContent; // Quantidade
    const precoExibido = card.querySelector(".preco").textContent; // Preço exibido

    // Feedback visual ao clicar
    clicado.textContent = "✓ Adicionado"; // Muda texto
    clicado.style.backgroundColor = "#27ae60"; // Muda cor para verde
    clicado.disabled = true; // Desativa botão temporariamente
    clicado.style.cursor = "default"; // Faz o cursor ficar no estilo padrão

    // Após 1,5s volta ao normal
    setTimeout(() => {
      clicado.textContent = "Pedir Agora";
      clicado.style.backgroundColor = "";
      clicado.disabled = false;
      clicado.style.cursor = "pointer";
    }, 1500);

    // Adiciona badge se ainda não existir
    if (!card.querySelector(".badge-adicionado")) {
      card.insertAdjacentHTML(
        "beforeend",
        "<span class='badge-adicionado'> ✓ No resumo </span>",
      );
    }

    // Adiciona item ao resumo
    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card);
  }
});

// 4. FUNÇÃO PARA ATUALIZAR PREÇO DO CARD
function atualizarPrecoCard(box) {
  const card = box.parentElement; // Card completo
  const spanPreco = card.querySelector(".preco"); // Elemento do preço

  // Pega o preço unitário armazenado no HTML (data-preco)
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));

  const quantidade = Number(box.querySelector(".qtd-valor").textContent); // Quantidade atual

  const total = precoUnitario * quantidade; // Calcula total

  // Atualiza o texto do preço formatado
  spanPreco.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;

  // Muda a cor dependendo do valor
  spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";
}

// 5. FUNÇÃO PARA ADICIONAR ITEM AO RESUMO
function adicionarItemAoResumo(nome, qtd, preco, cardOrigem) {
  const secaoResumo = document.querySelector("#secao-resumo"); // Seção do resumo
  const listaResumo = document.querySelector("#lista-resumo"); // Lista de itens

  if (!secaoResumo || !listaResumo) return; // Evita erro se não existir

  secaoResumo.style.display = "block"; // Mostra o resumo

  // Cria item da lista
  const itemLista = document.createElement("li");
  itemLista.classList.add("item-resumo");

  // Cria texto do item
  const textoSpan = document.createElement("span");
  textoSpan.textContent = `${qtd} x ${nome} - ${preco}`;

  // Botão de remover
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "❌";
  btnRemover.classList.add("btn-remover");

  // Evento de remover item
  btnRemover.addEventListener("click", () => {
    itemLista.remove(); // Remove da lista

    const badge = cardOrigem.querySelector(".badge-adicionado"); // Badge do card
    if (badge) badge.remove(); // Remove badge

    // Se não tiver mais itens, esconde o resumo
    if (listaResumo.children.length === 0) {
      secaoResumo.style.display = "none";
    }
  });

  // Adiciona elementos ao item
  itemLista.appendChild(textoSpan);
  itemLista.appendChild(btnRemover);

  // Adiciona item à lista
  listaResumo.appendChild(itemLista);
}

// 6. BOTÃO "LIMPAR TUDO"
const btnLimpar = document.querySelector("#btn-limpar");

if (btnLimpar) {
  btnLimpar.addEventListener("click", () => {
    const listaResumo = document.querySelector("#lista-resumo");
    const secaoResumo = document.querySelector("#secao-resumo");

    // Remove todos os badges dos cards
    document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove());

    // Remove todos os itens da lista
    while (listaResumo.firstElementChild) {
      listaResumo.firstElementChild.remove();
    }

    // Esconde o resumo
    secaoResumo.style.display = "none";
  });
}
