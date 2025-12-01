import express from "express";

const app = express();

app.use(express.json());

const livros = [
  {
    isbn: 1,
    titulo_livro: "Java - Como programar",
    editora: "Saber",
    ano_publicacao: "2002",
  },
  {
    isbn: 2,
    titulo_livro: "Java - Como programar de verdade",
    editora: "Saber",
    ano_publicacao: "2008",
  },
];

function buscarLivros(isbn) {
  return livros.findIndex((livro) => {
    return livro.isbn === Number(isbn);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Livraria Saber e Cia");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:isbn", (req, res) => {
  const index = buscarLivros(req.params.isbn);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).json(req.body);
});

app.put("/livros/:isbn", (req, res) => {
  const index = buscarLivros(req.params.isbn);
  livros[index].titulo_livro = req.body.titulo_livro;
  livros[index].editora = req.body.editora;
  livros[index].ano_publicacao = req.body.ano_publicacao;

  res.status(200).json(livros[index]);
});

app.delete("/livros/:isbn", (req, res) => {
  const index = buscarLivros(req.params.isbn);
  livros.splice(index, 1);
  res.status(200).json(livros);
});

const autores = [
  {
    id_autor: 1,
    nome_autor: "Andrew Clarck",
    nacionalidade: "Brasileiro",
  },
];

function buscarAutores(id_autor) {
  return autores.findIndex((autor) => {
    return autor.id_autor === Number(id_autor);
  });
}

app.get("/autores", (req, res) => {
  res.status(200).json(autores);
});

app.get("/autores/:id_autor", (req, res) => {
  const index = buscarAutores(req.params.id_autor);
  res.status(200).json(autores[index]);
});

app.post("/autores", (req, res) => {
  autores.push(req.body);
  res.status(201).json(req.body);
});

app.put("/autores/:id_autor", (req, res) => {
  const index = buscarAutores(req.params.id_autor);
  autores[index].nome_autor = req.body.nome_autor;
  autores[index].nacionalidade = req.body.nacionalidade;

  res.status(200).json(autores[index]);
});

app.delete("/autores/:id_autor", (req, res) => {
  const index = buscarAutores(req.params.id_autor);
  autores.splice(index, 1);
  res.status(200).json(autores);
});

const autor_livro = [
  {
    id_autor_livro: 1,
    id_autor: 1,
    isbn: 1,
  },
];

function buscarAutorLivro(id_autor_livro) {
  return autor_livro.findIndex((autor_livro) => {
    return autor_livro.id_autor_livro === Number(id_autor_livro);
  });
}

app.get("/autor_livro", (req, res) => {
  res.status(200).json(autor_livro);
});

app.get("/autor_livro/:id_autor_livro", (req, res) => {
  const index = buscarAutorLivro(req.params.id_autor_livro);
  res.status(200).json(autor_livro[index]);
});

app.post("/autor_livro", (req, res) => {
  autor_livro.push(req.body);
  res.status(201).json(req.body);
});

app.put("/autor_livro/:id_autor_livro", (req, res) => {
  const index = buscarAutorLivro(req.params.id_autor_livro);
  autor_livro[index].id_autor = req.body.id_autor;
  autor_livro[index].isbn = req.body.isbn;

  res.status(200).json(autor_livro[index]);
});

app.delete("/autor_livro/:id_autor_livro", (req, res) => {
  const index = buscarAutorLivro(req.params.id_autor_livro);
  autor_livro.splice(index, 1);
  res.status(200).json(autor_livro);
});

const exemplar = [
  {
    id_exemplar: 1,
    isbn: 1,
    status_exemplar: "Emprestado",
  },
];

function buscarExemplar(id_exemplar) {
  return exemplar.findIndex((exemplar) => {
    return exemplar.id_exemplar === Number(id_exemplar);
  });
}

app.get("/exemplar", (req, res) => {
  res.status(200).json(exemplar);
});

app.get("/exemplar/:id_exemplar", (req, res) => {
  const index = buscarExemplar(req.params.id_exemplar);
  res.status(200).json(exemplar[index]);
});

app.post("/exemplar", (req, res) => {
  exemplar.push(req.body);
  res.status(201).json(req.body);
});

app.put("/exemplar/:id_exemplar", (req, res) => {
  const index = buscarExemplar(req.params.id_exemplar);
  exemplar[index].isbn = req.body.isbn;
  exemplar[index].status_exemplar = req.body.status_exemplar;

  res.status(200).json(exemplar[index]);
});

app.delete("/exemplar/:id_exemplar", (req, res) => {
  const index = buscarExemplar(req.params.id_exemplar);
  exemplar.splice(index, 1);
  res.status(200).json(exemplar);
});

const membros = [
  {
    matricula: 1,
    nome_membro: "Lucas Sola",
    endereco: "Rua do Programador, 509",
    telefone: 11949333423,
  },
];

function buscarMembros(matricula) {
  return membros.findIndex((membro) => {
    return membro.matricula === Number(matricula);
  });
}

app.get("/membros", (req, res) => {
  res.status(200).json(membros);
});

app.get("/membros/:matricula", (req, res) => {
  const index = buscarMembros(req.params.matricula);
  res.status(200).json(membros[index]);
});

app.post("/membros", (req, res) => {
  membros.push(req.body);
  res.status(201).json(req.body);
});

app.put("/membros/:matricula", (req, res) => {
  const index = buscarMembros(req.params.matricula);
  membros[index].nome_membro = req.body.nome_membro;
  membros[index].endereco = req.body.endereco;
  membros[index].telefone = req.body.telefone;

  res.status(200).json(membros[index]);
});

app.delete("/membros/:matricula", (req, res) => {
  const index = buscarMembros(req.params.matricula);
  membros.splice(index, 1);
  res.status(200).json(membros);
});

const emprestimo = [
  {
    id_emprestimo: 1,
    id_exemplar: 1,
    matricula: 1,
    data_emprestimo: "2025-11-24",
    data_prevista_devolucao: "2025-12-01",
    data_devolucao: null,
  },
];

function buscarEmprestimo(id_emprestimo) {
  return emprestimo.findIndex((emprestimo) => {
    return emprestimo.id_emprestimo === Number(id_emprestimo);
  });
}

app.get("/emprestimos", (req, res) => {
  res.status(200).json(emprestimo);
});

app.get("/emprestimos/:id_emprestimo", (req, res) => {
  const index = buscarEmprestimo(req.params.id_emprestimo);
  res.status(200).json(emprestimo[index]);
});

app.post("/emprestimos", (req, res) => {
  emprestimo.push(req.body);
  res.status(201).json(req.body);
});

app.put("/emprestimos/:id_emprestimo", (req, res) => {
  const index = buscarEmprestimo(req.params.id_emprestimo);
  emprestimo[index].id_exemplar = req.body.id_exemplar;
  emprestimo[index].matricula = req.body.matricula;
  emprestimo[index].data_emprestimo = req.body.data_emprestimo;
  emprestimo[index].data_prevista_devolucao = req.body.data_prevista_devolucao;
  emprestimo[index].data_devolucao = req.body.data_devolucao;

  res.status(200).json(emprestimo[index]);
});

app.delete("/emprestimos/:id_emprestimo", (req, res) => {
  const index = buscarEmprestimo(req.params.id_emprestimo);
  emprestimo.splice(index, 1);
  res.status(200).json(emprestimo);
});

export default app;
