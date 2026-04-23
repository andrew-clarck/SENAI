const express = require("express");
const pool = require("./config/database");

const app = express();

app.use(express.json());

const queryAsync = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      err ? reject(err) : resolve(results);
    });
  });
};

//ARRUMAR AS OUTRAS FUNÇÕES E CÓDIGOS INTERNOS COM BASE EM validarId e app.get com id
function validarId(id, res) {
  if (!id || !Number.isInteger(Number(id))) {// O !Number.isInteger verifica se NÃO é um número inteiro (o "!" inverte o resultado)

    // Number(id) para que não aceite valores como '123abc' ou '  '
    mensagemValidacaoId(res);
    return true;
  }
  return false;
}

function mensagemValidacaoId(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: "ID inválido",
  });
}

function validarTipoDado(campo, dado, tipo, res) {
  if (typeof dado !== tipo) {
    mensagemValidacaoTipoDado(campo, tipo, res);
    return true;
  }
  return false;
}

function mensagemValidacaoTipoDado(campo, tipo, res) {
  res.status(400).json({
    sucesso: false,
    mensagem: `O campo '${campo}' deve ser do tipo ${tipo}`,
  });
}

function validarPreco(preco, res) {
  if (typeof preco !== "number" || preco < 0) {
    mensagemValidacaoPreco(res);
    return true;
  }
  return false;
}

function mensagemValidacaoPreco(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: `O campo 'preco' deve ser um número positivo`,
  });
}

function validarTextoObrigatorio(campo, valor, res) {
  if (typeof valor !== "string" || valor.trim() === "") {
    mensagemValidacaoTextoObrigatorio(campo, res);
    return true;
  }
  return false;
}

function mensagemValidacaoTextoObrigatorio(campo, res) {
  res.status(400).json({
    sucesso: false,
    mensagem: `O campo '${campo}' não pode ser vazio`,
  });
}

function validarExistencia(entidade, nome, res) {
  if (entidade.length === 0) {
    mensagemValidacaoExistencia(nome, res);
    return true;
  }
  return false;
}

function mensagemValidacaoExistencia(nome, res) {
  res.status(404).json({
    sucesso: false,
    mensagem: `${nome} não encontrado(a)`,
  });
}

app.get("/", (req, res) => {
  res.send("API SABOR DIGITAL");
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await queryAsync("SELECT * FROM produto ORDER BY id DESC");

    res.status(200).json({
      sucesso: true,
      dados: produtos,
      total: produtos.length,
    });
  } catch (erro) {
    console.error("Erro ao encontrar produtos:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar produtos",
      erro: erro.message,
    });
  }
});

app.get("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (validarId(id, res)) return;

    const produto = await queryAsync("SELECT * FROM produto WHERE id = ?", [
      id,
    ]);

    if (validarExistencia(produto, "Produto", res)) return;

    res.status(200).json({
      sucesso: true,
      dados: produto[0],
    });
  } catch (erro) {
    console.error("Erro ao encontrar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar produto",
      erro: erro.message,
    });
  }
});

app.post("/produtos", async (req, res) => {
  const { nome, descricao, preco, disponivel } = req.body;

  try {
    if (
      !nome ||
      nome.trim() === "" || // validação com .trim() para não aceitar valor "   "
      !descricao ||
      descricao.trim() === "" ||
      preco === undefined ||
      disponivel === undefined
    ) {
      return res.status(400).json({
        sucesso: false,
        mensagem:
          "Os campos nome, descricao, preco e disponivel devem ser preenchidos.",
      });
    }

    if (validarPreco(preco, res)) return;

    if (validarTipoDado("disponivel", disponivel, "boolean", res)) return;

    const novoProduto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: preco,
      disponivel: disponivel,
    };

    const resultado = await queryAsync("INSERT INTO produto SET ?", [
      novoProduto,
    ]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Produto criado com sucesso.",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao criar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao criar produto",
      erro: erro.message,
    });
  }
});

app.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, disponivel } = req.body;

  try {
    if (validarId(id, res)) return;

    const produtoExiste = await queryAsync(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );

    if (validarExistencia(produtoExiste, "Produto", res)) return;

    const produtoAtualizado = {};

    if (nome !== undefined) {
      if (validarTextoObrigatorio("nome", nome, res)) return;
      produtoAtualizado.nome = nome.trim();
    }

    if (descricao !== undefined) {
      if (validarTextoObrigatorio("descricao", descricao, res)) return;
      produtoAtualizado.descricao = descricao.trim();
    }

    if (preco !== undefined) {
      if (validarPreco(preco, res)) return;
      produtoAtualizado.preco = preco;
    }

    if (disponivel !== undefined) {
      if (validarTipoDado("disponivel", disponivel, "boolean", res)) return;
      produtoAtualizado.disponivel = disponivel;
    }

    if (Object.keys(produtoAtualizado).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar.",
      });
    }

    await queryAsync("UPDATE produto SET ? WHERE id = ?", [
      produtoAtualizado,
      id,
    ]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Produto atualizado com sucesso.",
    });
  } catch (erro) {
    console.error("Erro ao atualizar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar produto",
      erro: erro.message,
    });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (validarId(id, res)) return;

    const produtoExiste = await queryAsync(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );

    if (validarExistencia(produtoExiste, "Produto", res)) return;

    await queryAsync("DELETE FROM produto WHERE id = ?", [id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Produto apagado com sucesso.",
    });
  } catch (erro) {
    console.error("Erro ao deletar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao deletar produto",
      erro: erro.message,
    });
  }
});

module.exports = app;
