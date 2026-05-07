const ProdutoRepository = require("../repositories/ProdutoRepository");

function validarId(id) {
  if (
    !id ||
    id.trim() === "" ||
    !Number.isInteger(Number(id)) ||
    Number(id) < 0
  ) {
    throw {
      status: 400,
      mensagem: "ID inválido",
    };
  }
}

class ProdutoService {
  async listarProdutos() {
    const produtos = await ProdutoRepository.listarProdutos();

    return {
      sucesso: true,
      dados: produtos,
      total: produtos.length,
    };
  }

  async buscarProdutoPorId(id) {
    validarId(id);

    const produto = await ProdutoRepository.buscarProdutoPorId(id);

    if (!produto) {
      throw {
        status: 404,
        mensagem: "Produto não encontrado",
      };
    }

    return {
      sucesso: true,
      dados: produto[0],
    };
  }

  async cadastrarProduto(dados) {
    const { nome, descricao, preco, categoria, disponivel } = dados;

    if (
      !nome ||
      nome.trim() === "" ||
      !descricao ||
      descricao.trim() === "" ||
      preco === undefined
    ) {
      throw {
        status: 400,
        mensagem: "OS campos nome, descrição e preço são obrigatórios",
      };
    }

    if (typeof preco !== "number" || preco <= 0) {
      throw {
        status: 400,
        mensagem: "Preço deve ser um número positivo",
      };
    }

    const novoProduto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco,
      categoria: categoria || null,
      disponivel: disponivel || true,
    };

    const resultado = await ProdutoRepository.cadastrarProduto(novoProduto);

    return {
      sucesso: true,
      mensagem: "Produto cadastrado com sucesso",
      resultado,
    };
  }

  async atualizarProduto(id, dados) {
    validarId(id);

    const produtoExiste = await ProdutoRepository.buscarProdutoPorId(id);

    if (!produtoExiste) {
      throw {
        status: 404,
        mensagem: "Produto não encontrado",
      };
    }

    const produtoAtualizado = {};

    const { nome, descricao, preco, categoria, disponivel } = dados;

    if (nome !== undefined || nome.trim() !== "")
      produtoAtualizado.nome = nome.trim();
    if (descricao !== undefined || descricao.trim() !== "")
      produtoAtualizado.descricao = descricao.trim();

    if (preco !== undefined) {
      if (typeof preco !== "number" || preco <= 0) {
        throw {
          status: 400,
          mensagem: "Preço deve ser um número positivo",
        };
      }
      produtoAtualizado.preco = preco;
    }

    if (categoria !== undefined || categoria.trim() !== "")
      produtoAtualizado.categoria = categoria;
    if (disponivel !== undefined) produtoAtualizado.disponivel = disponivel;

    if (Object.keys(produtoAtualizado).length === 0) {
      throw {
        status: 400,
        mensagem: "Nenhum dado válido enviado para atualização",
      };
    }

    await ProdutoRepository.atualizarProduto(id, produtoAtualizado);

    return {
      sucesso: true,
      mensagem: "Produto atualizado",
    };
  }

  async apagarProduto(id) {
    validarId(id);

    const produtoExiste = await ProdutoRepository.buscarProdutoPorId(id);

    if (!produtoExiste) {
      throw {
        status: 404,
        mensagem: "Produto não encontrado",
      };
    }

    await ProdutoRepository.apagarProduto(id);

    return {
      sucesso: true,
      mensagem: "Produto apagado",
    };
  }
}

module.exports = new ProdutoService();
