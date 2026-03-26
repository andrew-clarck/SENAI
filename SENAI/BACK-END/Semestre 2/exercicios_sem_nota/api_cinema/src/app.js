const express = require("express");
const pool = require("./config/database"); // Import da conexão ao Database

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
  res.send("API CINEMA");
});

////////////////////////////////////////////////////////
// Filmes

app.get("/filmes", async (req, res) => {
  // pool.query("SELECT * FROM filme", (err, results) => {
  //   res.json(results); // Sobe para o SQL o comando SELECT e pega as informações em JSON
  try {
    const filmes = await queryAsync("SELECT * FROM filme"); // faz o mesmo do pool.query anterior, porém, agora com async

    res.status(200).json({
      sucesso: true,
      dados: filmes,
      total: filmes.length,
    });
  } catch (erro) {
    console.error(`Erro ao encontrar filmes: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar filmes",
      erro: erro.message,
    });
  }
});

app.get("/filmes/:id", async (req, res) => {
  const { id } = req.params; // const id = req.params.id - mesma coisa, jeitos diferentes

  // pool.query("SELECT * FROM filme WHERE id = ?", [id], (err, results) => {
  //   res.json(results); // Sobe para o SQL o comando SELECT, dessa vez com um WHERE id para selecionar um item específico e pega as informações em JSON. [id] preenche o espaço em "?"
  // });
  try {
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de filme inválido.",
      });
    }

    const filme = await queryAsync("SELECT * FROM filme WHERE id = ?", [id]);

    if (filme.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado.",
      });
    } // Se o length de filme for zero, significa que ele não encontrou nada (id maior do que o possível, por exemplo)

    res.status(200).json({
      sucesso: true,
      dados: filme[0],
    });
  } catch (erro) {
    console.error(`Erro ao encontrar o filme: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar o filme",
      erro: erro.message,
    });
  }
});

app.post("/filmes", async (req, res) => {
  const { titulo, genero, duracao, classificacao, data_lancamento } = req.body;

  try {
    if (!titulo || !genero || !duracao) {
      // Valida se os elementos obrigatórios estão preenchidos
      return res.status(400).json({
        sucesso: false,
        mensagem: "Os campos titulo, genero e duracao devem ser preenchidos",
      });
    }

    if (typeof duracao !== "number" || duracao <= 0) {
      // Valida se a duração é um número positivo
      return res.status(400).json({
        sucesso: false,
        mensagem: "Duração deve ser um número positivo",
      });
    }

    const novoFilme = {
      titulo: titulo.trim(),
      genero: genero.trim(),
      duracao,
      classificacao: classificacao || null,
      data_lancamento: data_lancamento || null,
    };

    const resultado = await queryAsync("INSERT INTO filme SET ?", [novoFilme]); // O SET faz a mesma função do INSERT INTO clássico, porém, fica muito mais simples, mas precisa criar o objeto antes, nesse caso o novoFilme

    res.status(201).json({
      sucesso: true,
      mensagem: "Filme cadastrado com sucesso.",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error(`Erro ao salvar filme: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao salvar filme",
      erro: erro.message,
    });
  }
});

app.put("/filmes/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, genero, duracao, classificacao, data_lancamento } = req.body;

  try {
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID filme inválido",
      });
    }

    const filmeExiste = await queryAsync("SELECT * FROM filme WHERE id = ?", [
      id,
    ]);

    if (filmeExiste.length === 0) {
      res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

    const filmeAtualizado = {};

    // Sequência de IFs que caso o elemento esteja preenchido com algo, ele adiciona ao objeto filmeAtualizado, feito desse modo pois pode ser apenas uma mudança, e não tudo
    if (titulo !== undefined) filmeAtualizado.titulo = titulo.trim();
    if (genero !== undefined) filmeAtualizado.genero = genero.trim();
    if (duracao !== undefined) {
      if (typeof duracao !== "number" || duracao <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Duração deve ser um número positivo",
        });
      }
      filmeAtualizado.duracao = duracao;
    }
    if (classificacao !== undefined)
      filmeAtualizado.classificacao = classificacao;
    if (data_lancamento !== undefined)
      filmeAtualizado.data_lancamento = data_lancamento;

    // Verifica se filmeAtualizado possui alguma chave(Adicionadas das verificações acima)
    if (Object.keys(filmeAtualizado).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar",
      });
    }

    // Atualiza o filme utilizando os dados salvos em filmeAtualizado(Adicionados nas sequências de IF)
    await queryAsync("UPDATE filme SET ? WHERE id = ?", [filmeAtualizado, id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Filme atualizado",
    });
  } catch (erro) {
    console.error(`Erro ao atualizar filme: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar filme",
      erro: erro.message,
    });
  }
});

app.delete("/filmes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id || isNaN(id)) {
      res.status(400).json({
        sucesso: false,
        mensagem: "ID filme inválido",
      });
    }

    const filmeExiste = await queryAsync("SELECT * FROM filme WHERE id = ?", [
      id,
    ]);

    if (filmeExiste.length === 0) {
      res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

    await queryAsync("DELETE FROM filme WHERE id = ?", [id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Filme apagado",
    });
  } catch (erro) {
    console.error(`Erro ao apagar filme: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao apagar filme",
      erro: erro.message,
    });
  }
});

///////////////////////////////////////////////
// SALAS
app.get("/salas", async (req, res) => {
  try {
    const salas = await queryAsync("SELECT * FROM sala");

    res.status(200).json({
      sucesso: true,
      dados: salas,
      total: salas.length,
    });
  } catch (erro) {
    console.error(`Erro ao encontrar salas: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar salas.",
      erro: erro.message,
    });
  }
});

app.get("/salas/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sala inválido.",
      });
    }

    const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (sala.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sala não encontrada.",
      });
    }

    res.status(200).json({
      sucesso: true,
      dados: sala[0],
    });
  } catch (erro) {
    console.error(`Erro ao encontrar a sala: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar sala.",
      erro: erro.message,
    });
  }
});

app.post("/salas", async (req, res) => {
  const { nome, capacidade } = req.body;

  try {
    if (!nome || !capacidade) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Os campos nome e capacidade devem ser preenchidos.",
      });
    }

    if (typeof capacidade !== "number" || capacidade <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Capacidade deve ser um número positivo.",
      });
    }

    const novaSala = {
      nome: nome.trim(),
      capacidade,
    };

    const resultado = await queryAsync("INSERT INTO sala SET ?", [novaSala]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Filme cadastrado com sucesso.",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error(`Erro ao salvar sala: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao salvar sala.",
      erro: erro.message,
    });
  }
});

app.put("/salas/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, capacidade } = req.body;

  try {
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sala inválido.",
      });
    }

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [
      id,
    ]);

    if (salaExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sala não encontrada",
      });
    }

    const salaAtualizada = {};

    if (nome !== undefined) salaAtualizada.nome = nome.trim();
    if (capacidade !== undefined) {
      if (typeof capacidade !== "number" || capacidade <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Capacidade deve ser um número positivo.",
        });
      }
      salaAtualizada.capacidade = capacidade;
    }

    if (Object.keys(salaAtualizada).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar",
      });
    }

    await queryAsync("UPDATE sala SET ? WHERE id = ?", [salaAtualizada, id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Sala atualizada com sucesso.",
    });
  } catch (erro) {
    console.error(`Erro ao atualizar sala: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao salvar sala.",
      erro: erro.message,
    });
  }
});

app.delete("/salas/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sala inválido.",
      });
    }

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [
      id,
    ]);

    if (salaExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sala não encontrada.",
      });
    }

    await queryAsync("DELETE FROM sala WHERE id = ?", [id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Filme apagado com sucesso.",
    });
  } catch (erro) {
    console.error(`Erro ao apagar sala: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao apagar sala.",
      erro: erro.message,
    });
  }
});
//////////////////////////////////
// Sessão

app.get("/sessoes", async (req, res) => {
  try {
    const sessoes = await queryAsync("SELECT * FROM sessao");

    res.status(200).json({
      sucesso: true,
      dados: sessoes,
      total: sessoes.length,
    });
  } catch (erro) {
    console.error(`Erro ao encontrar sessões: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar sessões.",
      erro: erro.message,
    });
  }
});

app.get("/sessoes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sessão inválido.",
      });
    }

    const sessao = await queryAsync("SELECT * FROM sessao WHERE id = ?", [id]);

    if (sessao.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sessão não encontrada.",
      });
    }

    res.status(200).json({
      sucesso: true,
      dados: sessao[0],
    });
  } catch (erro) {
    console.error(`Erro ao encontrar a sessão: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar sessão.",
      erro: erro.message,
    });
  }
});

app.post("/sessoes", async (req, res) => {
  const { filme_id, sala_id, data_hora, preco } = req.body;

  try {
    if (!filme_id || !sala_id || data_hora || preco) {
      return res.status(400).json({
        sucesso: false,
        mensagem:
          "Os campos filme_id, sala_id, data_hora e preco devem estar preenchidos",
      });
    }
    if (isNaN(filme_id) || isNaN(sala_id) || isNaN(preco)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Os campos filme_id, sala_id e preco devem ser números",
      });
    }

    const filmeExiste = await queryAsync("SELECT * FROM filme WHERE id = ?", [
      filme_id,
    ]);
    if (filmeExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [
      sala_id,
    ]);
    if (salaExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sala não encontrada",
      });
    }

    const novaSessao = {
      filme_id: filme_id,
      sala_id: sala_id,
      data_hora,
      preco: preco,
    };

    const resultado = await queryAsync("INSERT INTO sessao SET ?", [
      novaSessao,
    ]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Sessão criada com sucesso.",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error(`Erro ao criar a sessão: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao criar sessão.",
      erro: erro.message,
    });
  }
});

module.exports = app; // Exporta o app
