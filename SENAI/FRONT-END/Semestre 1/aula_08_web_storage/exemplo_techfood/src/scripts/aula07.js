// 1. SAUDAÇÃO DINÂMICA (Baseada na hora atual)

// 2. INTERATIVIDADE NOS CARDS (efeito hover com mouse)

// 3. DELEGAÇÃO DE EVENTOS (escuta cliques dentro do <main>)

// 4. FUNÇÃO PARA ATUALIZAR PREÇO DO CARD

// 5. FUNÇÃO PARA ADICIONAR ITEM AO RESUMO

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
