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
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID inválido",
      });
    }

    const produto = await queryAsync("SELECT * FROM produto WHERE id = ?", [
      id,
    ]);

    if (produto.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

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
    if (!nome || !descricao || !preco || disponivel === null) {
      return res.status(400).json({
        sucesso: false,
        mensagem:
          "Os campos nome, descricao, preco e disponivel devem ser preenchidos.",
      });
    }
    if (typeof preco !== "number" || preco <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "preco deve ser um número positivo.",
      });
    }
    if (typeof disponivel !== "boolean") {
      return res.status(400).json({
        sucesso: false,
        mensagem: "disponivel deve ser true ou false.",
      });
    }

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
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de produto inválido",
      });
    }

    const produtoExiste = await queryAsync(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );
    if (produtoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado.",
      });
    }

    const produtoAtualizado = {};

    if (nome !== undefined) produtoAtualizado.nome = nome.trim();

    if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim();

    if (preco !== undefined) {
      if (typeof preco !== "number" || preco <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "preco deve ser um número positivo",
        });
      }
      produtoAtualizado.preco = preco;
    }

    if (disponivel !== undefined) {
      if (typeof disponivel !== "boolean") {
        return res.status(400).json({
          sucesso: false,
          mensagem: "disponivel deve ser true ou false",
        });
      }
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
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de produto inválido",
      });
    }

    const produtoExiste = await queryAsync(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );
    if (produtoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado.",
      });
    }

    await queryAsync("DELETE FROM produto WHERE id = ?", [id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Produto apagado com sucesso.",
    });
  } catch (erro) {}
});

module.exports = app;
