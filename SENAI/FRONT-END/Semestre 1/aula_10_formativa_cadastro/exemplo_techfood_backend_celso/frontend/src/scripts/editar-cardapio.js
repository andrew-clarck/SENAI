document.addEventListener("DOMContentLoaded", () => {
  carregarProdutos();

  document.querySelector("#form-edicao").addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("SUBMIT CAPTURADO");

    salvarAlteracoes(e);

    return false;
  });

  document
    .querySelector("#imagem")
    .addEventListener("change", atualizarPreview);

  document
    .querySelector(".fechar-modal")
    .addEventListener("click", fecharModal);

  document.querySelector("#modal-edicao").addEventListener("click", (event) => {
    if (event.target.id === "modal-edicao") {
      fecharModal();
    }
  });

  document.querySelector("#cancelar-exclusao").addEventListener("click", () => {
    document.querySelector("#modal-confirmacao").classList.remove("ativo");
  });

  document
    .querySelector("#confirmar-exclusao")
    .addEventListener("click", confirmarExclusao);
});

let produtoParaExcluir = null;

async function carregarProdutos() {
  try {
    const produtos = await buscarProdutos();

    const container = document.querySelector("#lista-produtos");

    container.innerHTML = "";

    produtos.forEach((produto) => {
      const imagem = produto.imagem
        ? `http://localhost:3000${produto.imagem}`
        : "src/images/sem-imagem.png";

      container.innerHTML += `
            <div class="produto-card">

                <img src="${imagem}" alt="${produto.nome}">

                <div class="produto-info">

                    <h3>${produto.nome}</h3>

                    <p>${produto.descricao}</p>

                    <p class="preco">
                        R$ ${Number(produto.preco).toFixed(2)}
                    </p>

                    <div class="acoes">

                        <button
                            class="btn-editar"
                            onclick="editarProduto(${produto.id})">

                            Editar

                        </button>

                        <button
                            class="btn-excluir"
                            onclick="removerProduto(${produto.id})">

                            Excluir

                        </button>

                    </div>

                </div>

            </div>
        `;
    });
  } catch (erro) {
    console.error(erro);

    mostrarToast("Erro ao carregar produtos.", "error");
  }
}

async function editarProduto(id) {
  try {
    const produto = await buscarProdutoPorId(id);

    document.querySelector("#produto-id").value = produto.id;

    document.querySelector("#nome").value = produto.nome;

    document.querySelector("#descricao").value = produto.descricao;

    document.querySelector("#preco").value = produto.preco;

    document.querySelector("#categoria").value = produto.categoria;

    document.querySelector("#disponivel").checked = produto.disponivel;

    document.querySelector("#preview-imagem").src = produto.imagem
      ? `http://localhost:3000${produto.imagem}`
      : "src/images/sem-imagem.png";

    abrirModal();
  } catch (erro) {
    console.error(erro);

    mostrarToast("Erro ao carregar produtos.", "error");
  }
}

function removerProduto(id) {
  produtoParaExcluir = id;

  document.querySelector("#modal-confirmacao").classList.add("ativo");
}

async function salvarAlteracoes(event) {
  event.preventDefault();

  try {
    const id = document.querySelector("#produto-id").value;

    console.log("ID:", id);

    const formData = new FormData();

    formData.append("nome", document.querySelector("#nome").value);

    formData.append("descricao", document.querySelector("#descricao").value);

    formData.append("preco", document.querySelector("#preco").value);

    formData.append("categoria", document.querySelector("#categoria").value);

    formData.append(
      "disponivel",
      document.querySelector("#disponivel").checked,
    );

    const imagem = document.querySelector("#imagem").files[0];

    if (imagem) {
      formData.append("imagem", imagem);
    }

    const resposta = await atualizarProduto(id, formData);

    console.log(resposta);
  } catch (erro) {
    console.error("ERRO COMPLETO:");
    console.error(erro);
  }
}

function atualizarPreview(event) {
  const arquivo = event.target.files[0];

  if (!arquivo) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    document.querySelector("#preview-imagem").src = e.target.result;
  };

  reader.readAsDataURL(arquivo);
}

function abrirModal() {
  document.querySelector("#modal-edicao").classList.add("ativo");

  document.body.style.overflow = "hidden";
}

function fecharModal() {
  document.querySelector("#modal-edicao").classList.remove("ativo");

  document.body.style.overflow = "auto";
}

function mostrarToast(mensagem, tipo = "success") {
  const toast = document.querySelector("#toast");

  toast.textContent = mensagem;

  toast.className = "";

  toast.classList.add("show");

  toast.classList.add(tipo === "success" ? "toast-success" : "toast-error");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

async function confirmarExclusao() {
  try {
    await excluirProduto(produtoParaExcluir);

    document.querySelector("#modal-confirmacao").classList.remove("ativo");

    mostrarToast("Produto removido com sucesso!");

    carregarProdutos();
  } catch (erro) {
    console.error(erro);

    mostrarToast("Erro ao excluir produto.", "error");
  }
}
