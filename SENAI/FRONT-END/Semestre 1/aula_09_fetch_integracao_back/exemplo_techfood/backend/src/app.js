const express = require("express");
const path = require("node:path");
const cors = require("cors");
const app = express();
const routes = require("./routes");

// Middlewares globais
app.use(cors()); // Habilita o CORS para permitir requisições do frontend
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.static(path.resolve(__dirname, "public")));

// Registro de todas as rotas da API centralizadas
app.use("/", routes);

module.exports = app;
