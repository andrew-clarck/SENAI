document.addEventListener("DOMContentLoaded", () => {
  renderizarCardapio();
  inicializarHoverCards();
  inicializarVitrine();
});

async function renderizarCardapio() {
  const grid = document.querySelector("#grid-cardapio");

  if (!grid) return;

  grid.innerHTML = "<p class='loading'> Carregando cardápio... </p>";

  try {
    const produtos = await buscarProdutos();

    grid.innerHTML = "";

    produtos.forEach((produto) => {
      const card = document.createElement("article");
      card.classList.add("card");
      card.setAttribute("data-id", produto.id);
      const urlImagem = `http://localhost:3000${produto.imagem}`;

      card.innerHTML = 
      `<img src="${urlImagem}" alt="${produto.nome}" class="card-img" />
        <h3>${produto.nome}</h3>
      <p class="desc">${produto.descricao}</p>
      <div class="quantidade-box">
        <button class="btn-qtd btn-menos">-</button>
        <span class="qtd-valor">1</span>
        <button class="btn-qtd btn-mais">+</button>
      </div>
      <span class="preco" data-preco="${produto.preco}">
        R$ ${parseFloat(produto.preco).toFixed(2).replace(".", ",")}
      </span>
      <button class="btn-pedido">Pedir Agora</button>`;

      grid.appendChild(card);
    });
  } catch (erro) {
    grid.innerHTML = `<p class="loading erro>Erro ao carregar cardápio. Verifique se o servidor está rodando.</p>`;
  }
} // Fim renderizarCardapio()

function inicializarHoverCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });
}

function inicializarVitrine() {
  // 3. DELEGAÇÃO DE EVENTOS (escuta cliques dentro do <main>)
  const main = document.querySelector("main");

  if (!main) return;

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

      const card = clicado.parentElement;

      const produtoId = Number(card.getAttribute("data-id"));
      const quantidade = Number(card.querySelector(".qtd-valor").textContent);

      // Acionar ação de salvarPedido() - usando padrão chave-valor
      salvarPedido(produtoId, quantidade, clicado);
    }
  });
}

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

function salvarPedido(produtoId, quantidade, botao) {
  const card = botao.parentElement;
  const nome = card.querySelector("h3").textContent;
  const preco = parseFloat(
    card.querySelector(".preco").getAttribute("data-preco"),
  );
  const subtotal = preco * quantidade;

  const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  lista.push({
    produto_id: produtoId,
    nome,
    quantidade,
    preco,
    subtotal,
  });

  localStorage.setItem("techfood_pedidos", JSON.stringify(lista));

  // Feedback visual ao clicar
  botao.textContent = "✓ Adicionado"; // Muda texto
  botao.style.backgroundColor = "#27ae60"; // Muda cor para verde
  botao.disabled = true; // Desativa botão temporariamente
  botao.style.cursor = "default"; // Faz o cursor ficar no estilo padrão

  atualizarContadorPedidos();

  // Após 1,5s volta ao normal
  setTimeout(() => {
    botao.textContent = "Pedir Agora";
    botao.style.backgroundColor = "";
    botao.disabled = false;
    botao.style.cursor = "pointer";

    const box = card.querySelector(".quantidade-box");
    if (box) {
      box.querySelector(".qtd-valor").textContent = "1";
      atualizarPrecoCard(box);
    }
  }, 1500);
}

function atualizarContadorPedidos() {
  // Continua...
}
