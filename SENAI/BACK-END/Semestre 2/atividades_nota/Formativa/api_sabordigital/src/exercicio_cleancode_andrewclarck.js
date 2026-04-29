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

// ==============================
// SETUP BÁSICO (simulado)
// ==============================

// ==============================
// EXERCÍCIO 4 - PRODUTOS
// ==============================

function validarPrecoProduto(preco, res) {
  if (typeof preco !== "number" || preco < 0) {
    mensagemValidacaoPrecoProduto(res);
    return true;
  }
  return false;
}

function mensagemValidacaoPrecoProduto(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: "O campo preco deve ser um número igual ou maior que 0",
  });
}

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await queryAsync("SELECT * FROM produto");

    res.status(200).json({
      sucesso: true,
      dados: produtos,
      total: produtos.length,
    });
  } catch (erro) {
    console.error("Erro ao encontrar produtos: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar produtos",
      erro: erro.message,
    });
  }
});

app.post("/produtos", async (req, res) => {
  try {
    const { nome, preco } = req.body;

    if (!nome || nome.trim() === "" || preco === undefined) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Os campos nome e preco devem ser preenchidos.",
      });
    }

    if (validarPrecoProduto(preco, res)) return;

    const novoProduto = {
      nome: nome.trim(),
      preco: preco,
    };

    const resultado = await queryAsync("INSERT INTO produto SET ?", [
      novoProduto,
    ]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Produto criado com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao criar produto: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao criar produto",
      erro: erro.message,
    });
  }
});

// ==============================
// EXERCÍCIO 5 - CLIENTES
// ==============================

function validarIdCliente(id, res) {
  if (!id || !Number.isInteger(Number(id))) {
    mensagemValidacaoIdCliente(res);
    return true;
  }
  return false;
}

function mensagemValidacaoIdCliente(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: "ID inválido.",
  });
}

function validarExistenciaCliente(cliente, res) {
  if (cliente.length === 0) {
    mensagemValidacaoExistenciaCliente(res);
    return true;
  }
  return false;
}

function mensagemValidacaoExistenciaCliente(res) {
  res.status(404).json({
    sucesso: false,
    mensagem: "Cliente não encontrado",
  });
}

function validarAtualizacaoCliente(entidadeAtualizada, res) {
  if (Object.keys(entidadeAtualizada).length === 0) {
    responderClienteNaoEncontrado(res);
    return true;
  }
  return false;
}

function responderClienteNaoEncontrado(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: "Nenhum campo válido foi enviado para atualização",
  });
}

function validarTextoObrigatorio(campo, valor, res) {
  if (typeof valor !== "string" || valor.trim() === "") {
    responderTextoObrigatorio(campo, res);
    return true;
  }
  return false;
}

function responderTextoObrigatorio(campo, res) {
  res.status(400).json({
    sucesso: false,
    mensagem: `O campo '${campo}' não pode ser vazio`,
  });
}

app.get("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (validarIdCliente(id, res)) return;

    const cliente = await queryAsync("SELECT * FROM cliente WHERE id = ?", [
      id,
    ]);

    if (validarExistenciaCliente(cliente, res)) return;

    res.status(200).json({
      sucesso: true,
      dados: cliente[0],
    });
  } catch (erro) {
    console.error("Erro ao encontrar cliente: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar cliente",
      erro: erro.message,
    });
  }
});

app.put("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (validarIdCliente(id, res)) return;

    const cliente = await queryAsync("SELECT * FROM cliente WHERE id = ?", [
      id,
    ]);

    if (validarExistenciaCliente(cliente, res)) return;

    const clienteAtualizado = {};

    if (nome !== undefined) {
      if (validarTextoObrigatorio("nome", nome, res)) return;
      clienteAtualizado.nome = nome.trim();
    }

    if (email !== undefined) {
      if (validarTextoObrigatorio("email", email, res)) return;
      clienteAtualizado.email = email.trim();
    }

    if (validarAtualizacaoCliente(clienteAtualizado, res)) return;

    await queryAsync("UPDATE cliente SET ? WHERE id = ?", [
      clienteAtualizado,
      id,
    ]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Cliente atualizado com sucesso.",
    });
  } catch (erro) {
    console.error("Erro ao atualizar cliente: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar cliente",
      erro: erro.message,
    });
  }
});

// ==============================
// EXERCÍCIO 6 - CATEGORIAS
// ==============================

app.post("/categorias", async (req, res) => {
  try {
    const { nome } = req.body;

    if (!nome || nome.trim() === "") {
      return res.status(400).json({
        sucesso: false,
        mensagem: "O campo nome deve ser preenchido",
      });
    }

    const novaCategoria = {
      nome: nome.trim(),
    };

    const resultado = await queryAsync("INSERT INTO categoria SET ?", [
      novaCategoria,
    ]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Categoria criada com sucesso.",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao criar categoria:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao criar categoria",
      erro: erro.message,
    });
  }
});

app.get("/categorias/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !Number.isInteger(Number(id))) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID inválido.",
      });
    }

    const categoria = await queryAsync("SELECT * FROM categoria WHERE id = ?", [
      id,
    ]);

    if (categoria.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Categoria não encontrada",
      });
    }

    res.status(200).json({
      sucesso: true,
      dados: categoria[0],
    });
  } catch (erro) {
    console.error("Erro ao encontrar categoria:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar categoria",
      erro: erro.message,
    });
  }
});
