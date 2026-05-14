document.addEventListener("DOMContentLoaded", () => {
  inicializarHoverCards();
  inicializarVitrine();
});

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

      const card = clicado.parentElement; // Card do produto
      const nomePrato = card.querySelector("h3").textContent; // Nome do prato
      const quantidade = Number(card.querySelector(".qtd-valor").textContent); // Quantidade
      const preco = parseFloat(card.querySelector(".preco").getAttribute("data-preco")); // Preço exibido - pega o atributo data- da tag, facilitando a separação do R$, exemplo: <span class="preco" id="preco-lasanha" data-preco="45.00">R$ 45,00</span>

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
      const badgeExistente = card.querySelector(".badge-adicionado");

      if (badgeExistente) badgeExistente.remove();

      card.insertAdjacentHTML(
        "beforeend",
        "<span class='badge-adicionado'> ✓ No resumo </span>",
      );

      setTimeout(function () {
        const badge = card.querySelector(".badge-adicionado");
        if (badge) badge.remove;
      }, 2000);

      // Resetar a quantidade de itens (novo)
      const box = card.querySelector(".quantidade-box");
      if (box) {
        box.querySelector(".qtd-valor").textContent = "1";
        atualizarPrecoCard(box);
      }

      // Acionar ação de salvarPedido() - usando padrão chave-valor
      salvarPedido({ nome: nomePrato, preco: preco, qtd: quantidade });

      atualizarContadorPedidos();
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

function salvarPedido(pedido) {
  // Leu
  const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  // Modificou
  pedido.subtotal = pedido.preco * pedido.qtd;
  lista.push(pedido);

  // Salvou
  localStorage.setItem("techfood_pedidos", JSON.stringify(lista));
}

function atualizarContadorPedidos() {
  // Continua...
}
