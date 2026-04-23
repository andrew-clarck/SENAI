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

function validarId(id, res) {
  if (!id || isNaN(id)) {
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

//Exercício 1 - Usuários
app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await queryAsync("SELECT * FROM usuario");

    res.status(200).json({
      sucesso: true,
      dados: usuarios,
      total: usuarios.length,
    });
  } catch (erro) {
    console.error("Erro ao encontrar usuários: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar usuários",
      erro: erro.message,
    });
  }
});

app.get("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (validarId(id, res)) return;

    const usuario = await queryAsync("SELECT * FROM usuario WHERE id = ?", [
      id,
    ]);

    if (validarExistencia(usuario, "Usuário", res)) return;

    res.status(200).json({
      sucesso: true,
      dados: usuario[0],
    });
  } catch (erro) {
    console.error("Erro ao encontrar usuário: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar usuário",
      erro: erro.message,
    });
  }
});

//Exercício 2 - Pedidos
app.post("/pedidos", async (req, res) => {
  try {
    const { cliente, valor } = req.body;

    if (!cliente || valor === undefined) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Os campos cliente e valor devem ser preenchidos",
      });
    }

    if (typeof valor !== "number" || valor < 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "O campo valor deve ser 0 ou um número positivo",
      });
    }

    const novoPedido = {
      cliente: cliente.trim(),
      valor,
    };

    const resultado = await queryAsync("INSERT INTO pedido SET ?", [
      novoPedido,
    ]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Pedido criado com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao criar pedido: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao criar pedido",
      erro: erro.message,
    });
  }
});

//Exercício 3 - Salas
function validarAtualizacaoEntidade(entidadeAtualizada, res) {
  if (Object.keys(entidadeAtualizada).length === 0) {
    mensagemValidacaoAtualizacaoEntidade(res);
    return true;
  }
  return false;
}

function mensagemValidacaoAtualizacaoEntidade(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: "Nenhum campo válido foi enviado para atualização",
  });
}

app.put("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { dados } = req.body;

    if (validarId(id, res)) return;

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [
      id,
    ]);

    if (validarExistencia(salaExiste, "Sala", res)) return;

    const salaAtualizada = {};

    if (dados !== undefined) salaAtualizada.dados = dados;

    if (validarAtualizacaoEntidade(salaAtualizada, res))
      await queryAsync("UPDATE sala SET ? WHERE id = ?", [salaAtualizada, id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Sala atualizada com sucesso",
    });
  } catch (erro) {
    console.error("Erro ao atualizar a sala: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar a sala",
      erro: erro.message,
    });
  }
});

app.delete("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (validarId(id, res)) return;

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [
      id,
    ]);

    if (validarExistencia(salaExiste, "Sala", res)) return;

    await queryAsync("DELETE FROM sala WHERE id = ?", [id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Sala apagada com sucesso",
    });
  } catch (erro) {
    console.error("Erro ao apagar a sala: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao apagar a sala",
      erro: erro.message,
    });
  }
});
