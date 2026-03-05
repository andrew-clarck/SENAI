const pool = require("./config/database"); // Import da conexão ao Database
const app = require("./app"); // Import do app

const PORT = 3000;

pool.getConnection((err, connection) => { 
  if (err) {
    console.log("Erro ao conectar ao banco", err);
    process.exit(1);
  }
  console.log("Conectado ao MySQL");
}); // Tentativa de conexão ao Database

app.listen(PORT, () => {
  console.log("Servidor Rodando");
});
