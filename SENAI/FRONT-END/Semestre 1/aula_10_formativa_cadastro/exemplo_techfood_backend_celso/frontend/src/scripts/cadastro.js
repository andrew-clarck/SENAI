document.addEventListener("DOMContentLoaded", () => {
  enviarFormularioCadastro();
});

function enviarFormularioCadastro() {
  // TODO: implementar envio do formulário de cadastro para a API
  const form = document.querySelector("#form-cadastro");

  if (!form) return;

  const inputImagem = document.querySelector("#imagem");
  const nomeArquivo = document.querySelector("#nome-arquivo");

  const previewImagem = document.querySelector("#preview-imagem");

  inputImagem.addEventListener("change", () => {
    const arquivo = inputImagem.files[0];

    if (!arquivo) {
      nomeArquivo.textContent = "Nenhuma imagem selecionada";
      previewImagem.style.display = "none";
      return;
    }

    nomeArquivo.textContent = arquivo.name;

    const reader = new FileReader();

    reader.onload = (event) => {
      previewImagem.src = event.target.result;
      previewImagem.style.display = "block";
    };

    reader.readAsDataURL(arquivo);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const precoInput = document.querySelector("#preco");
    const disponivel = document.querySelector("#disponivel");

    const formData = new FormData(form);

    formData.set("preco", precoInput.value.replace(",", "."));

    formData.set("disponivel", disponivel.checked ? "1" : "0");

    try {
      await criarProduto(formData);

      alert("Produto cadastrado com sucesso!");

      form.reset();
      nomeArquivo.textContent = "Nenhuma imagem selecionada";
      previewImagem.src = "";
      previewImagem.style.display = "none";
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(error.message);
    }
  });
}
