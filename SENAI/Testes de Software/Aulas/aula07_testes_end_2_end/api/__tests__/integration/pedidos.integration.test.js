const request = require("supertest");
const createApp = require("../../app");

// Teste de integracao: testa a API de ponta a ponta via HTTP real.
// Cada teste recebe uma app nova (factory), garantindo estado isolado.
//
// As validacoes e o calculo do total sao verificados com o repository real.

describe("API /pedidos (integracao com supertest)", () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  describe("GET /pedidos", () => {
    test("retorna 200 e um array com os pedidos iniciais", async () => {
      const res = await request(app).get("/pedidos");

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(1);
    });
  });

  describe("GET /pedidos/:id", () => {
    test("retorna 200 e o pedido quando o id existe", async () => {
      const res = await request(app).get("/pedidos/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        id: 1,
        cliente: "Ana Souza",
        itens: [{ nome: "Coxinha", precoUnitario: 5, quantidade: 2 }],
        status: "pendente",
        total: 10,
      });
    });

    test("retorna 404 com mensagem de erro quando o pedido nao existe", async () => {
      const res = await request(app).get("/pedidos/999");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ erro: "Pedido nao encontrado" });
    });
  });

  describe("POST /pedidos", () => {
    test("retorna 201 e o pedido criado com o total calculado corretamente", async () => {
      const dados = {
        cliente: "Carla",
        itens: [
          { nome: "Coxinha", precoUnitario: 5, quantidade: 2 },
          { nome: "Pastel", precoUnitario: 8.5, quantidade: 3 },
        ],
      };
      const res = await request(app).post("/pedidos").send(dados);
      const consulta = await request(app).get(`/pedidos/${res.body.id}`);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: 2, ...dados, total: 35.5, status: "pendente" });
      expect(consulta.status).toBe(200);
      expect(consulta.body).toEqual(res.body);
    });

    test("retorna 400 quando o cliente esta faltando", async () => {
      const res = await request(app).post("/pedidos").send({
        itens: [{ nome: "Coxinha", precoUnitario: 5, quantidade: 2 }],
      });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ erro: "Cliente e obrigatorio" });
    });

    test("retorna 400 quando a lista de itens esta vazia", async () => {
      const res = await request(app).post("/pedidos").send({ cliente: "Carla", itens: [] });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ erro: "Pedido deve ter ao menos um item" });
    });

    // Cada linha e um teste independente, com uma app nova criada no beforeEach.
    test.each([
      ["preco ausente", { nome: "Coxinha", quantidade: 2 }],
      ["quantidade ausente", { nome: "Coxinha", precoUnitario: 5 }],
      ["preco nao numerico", { nome: "Coxinha", precoUnitario: "abc", quantidade: 2 }],
      ["quantidade nao numerica", { nome: "Coxinha", precoUnitario: 5, quantidade: "abc" }],
      ["preco em texto", { nome: "Coxinha", precoUnitario: "5", quantidade: 2 }],
      ["quantidade em texto", { nome: "Coxinha", precoUnitario: 5, quantidade: "2" }],
      ["preco nulo", { nome: "Coxinha", precoUnitario: null, quantidade: 2 }],
      ["quantidade nula", { nome: "Coxinha", precoUnitario: 5, quantidade: null }],
      ["preco zero", { nome: "Coxinha", precoUnitario: 0, quantidade: 2 }],
      ["quantidade zero", { nome: "Coxinha", precoUnitario: 5, quantidade: 0 }],
      ["preco negativo", { nome: "Coxinha", precoUnitario: -5, quantidade: 2 }],
      ["quantidade negativa", { nome: "Coxinha", precoUnitario: 5, quantidade: -2 }],
      ["nome ausente", { precoUnitario: 5, quantidade: 2 }],
      ["item nulo", null],
    ])("retorna 400 quando algum item tem %s", async (caso, item) => {
      const res = await request(app).post("/pedidos").send({ cliente: "Carla", itens: [item] });
      const listagem = await request(app).get("/pedidos");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ erro: "Itens devem ter nome, preco e quantidade validos" });
      expect(listagem.status).toBe(200);
      expect(listagem.body).toHaveLength(1);
      const valido = await request(app).post("/pedidos").send({
        cliente: "Carla",
        itens: [{ nome: "Coxinha", precoUnitario: 5, quantidade: 2 }],
      });
      expect(valido.status).toBe(201);
      expect(valido.body.id).toBe(2);
      expect(valido.body.total).toBe(10);
    });
  });

  describe("PATCH /pedidos/:id/status", () => {
    test("retorna 200 e o pedido com o novo status quando o id existe", async () => {
      const res = await request(app).patch("/pedidos/1/status").send({ status: "pago" });
      const consulta = await request(app).get("/pedidos/1");

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("id", 1);
      expect(res.body).toHaveProperty("status", "pago");
      expect(res.body).toHaveProperty("total", 10);
      expect(consulta.status).toBe(200);
      expect(consulta.body).toEqual(res.body);
    });

    test("retorna 404 quando o pedido nao existe", async () => {
      const res = await request(app).patch("/pedidos/999/status").send({ status: "pago" });

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ erro: "Pedido nao encontrado" });
    });

    test("retorna 400 quando o status enviado e invalido", async () => {
      const res = await request(app).patch("/pedidos/1/status").send({ status: "entregue" });
      const consulta = await request(app).get("/pedidos/1");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ erro: "Status invalido" });
      expect(consulta.status).toBe(200);
      expect(consulta.body.status).toBe("pendente");
    });

    test("retorna 400 ao tentar alterar o status de um pedido ja cancelado", async () => {
      const cancelado = await request(app).patch("/pedidos/1/status").send({ status: "cancelado" });
      const res = await request(app).patch("/pedidos/1/status").send({ status: "pago" });
      const consulta = await request(app).get("/pedidos/1");

      expect(cancelado.status).toBe(200);
      expect(cancelado.body.status).toBe("cancelado");
      expect(res.status).toBe(400);
      expect(res.body).toEqual({ erro: "Pedido cancelado nao pode ser alterado" });
      expect(consulta.status).toBe(200);
      expect(consulta.body.status).toBe("cancelado");
    });
  });

  describe("DELETE /pedidos/:id", () => {
    test("retorna 204 quando o pedido e removido com sucesso", async () => {
      const res = await request(app).delete("/pedidos/1");

      expect(res.status).toBe(204);
      expect(res.text).toBe("");
    });

    test("pedido removido nao aparece mais na listagem", async () => {
      const removido = await request(app).delete("/pedidos/1");
      const consulta = await request(app).get("/pedidos/1");
      const listagem = await request(app).get("/pedidos");

      expect(removido.status).toBe(204);
      expect(consulta.status).toBe(404);
      expect(consulta.body).toEqual({ erro: "Pedido nao encontrado" });
      expect(listagem.status).toBe(200);
      expect(listagem.body).toEqual([]);
    });

    test("retorna 404 quando o pedido nao existe", async () => {
      const res = await request(app).delete("/pedidos/999");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ erro: "Pedido nao encontrado" });
    });
  });
});
