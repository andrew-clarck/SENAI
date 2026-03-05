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

app.get("/filmes", async (req, res) => {
  // pool.query("SELECT * FROM filme", (err, results) => {
  //   res.json(results); // Sobe para o SQL o comando SELECT e pega as informações em JSON
  try {
    const filmes = await queryAsync("SELECT * FROM filme"); // faz o mesmo do pool.query anterior, porém, agora com async

    res.json({
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
    if(!id || isNaN(id)){
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de filme inválido."
      })
    }

    const filme = await queryAsync("SELECT * FROM filme WHERE id = ?", [id]);

    if(filme.length === 0){
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado."
      })
    } // Se o length de filme for zero, significa que ele não encontrou nada (id maior do que o possível, por exemplo)

    res.json({
      sucesso: true,
      dados: filme[0],
    });
  } catch (erro) {
    console.error(`Erro ao encontra o filme: ${erro}`);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao encontrar o filme",
      erro: erro.message,
    });
  }
});

app.post("/filmes", (req, res) => {});

module.exports = app; // Exporta o app
