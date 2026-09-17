const request = require("supertest");
const createApp = require("../app");

describe("API /produtos - Testes de integração", () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });
  describe("GET /produtos", () => {
    test("Retorna 200 e um array com os produtos iniciais", async () => {
      const res = await request(app).get("/produtos");

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(3);
    });
    test("Retorna 200 e um item do produto pelo id", async () => {
      const res = await request(app).get("/produtos/1");

      expect(res.status).toBe(200);
      expect(res.body.id).toBe(1);
    });
  });

  describe("POST /produtos", () => {
    test("retorna 201 e o produto criado com id gerado", async () => {
      const dados = { nome: "Coxinha", preco: 5 };
      const res = await request(app).post("/produtos").send(dados);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("nome", dados.nome);
      expect(res.body).toHaveProperty("preco", dados.preco);
    });

    test("retorna 400 com { erro: ... } quando o nome estiver faltando", async () => {
      const dados = { preco: 2 };
      const res = await request(app).post("/produtos").send(dados);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("erro", "Nome e preco sao obrigatorios");
    });

    test("retorna 400 com { erro: ... } quando o preço estiver faltando", async () => {
      const dados = { nome: "Banana" };
      const res = await request(app).post("/produtos").send(dados);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("erro", "Nome e preco sao obrigatorios");
    });

    test("o produto criado aparece em uma chamada seguinte a GET /produtos", async () => {
      const dados = { nome: "Banana", preco: 10 };
      const res = await request(app).post("/produtos").send(dados);
      const resGet = await request(app).get("/produtos");

      expect(res.status).toBe(201);
      expect(resGet.status).toBe(200);
      expect(resGet.body).toContainEqual(res.body);
    });
  });

  describe("DELETE /produtos/:id", () => {
    test("retorna 204 quando o produto é removido com sucesso", async () => {
      const id = 3;
      const res = await request(app).delete(`/produtos/${id}`);

      expect(res.status).toBe(204);
    });

    test("o produto removido não aparece mais em GET /produtos/:id e retorna 404", async () => {
      const id = 3;
      const res = await request(app).delete(`/produtos/${id}`);
      const resGet = await request(app).get(`/produtos/${id}`);

      expect(res.status).toBe(204);
      expect(resGet.status).toBe(404);
    });

    test("retorna 404 com { erro: ... } quando o produto não existir", async () => {
      const id = 4;
      const res = await request(app).delete(`/produtos/${id}`);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("erro", "Produto nao encontrado");
    });
  });
});
