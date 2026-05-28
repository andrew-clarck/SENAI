/* ==========================================================
   API.JS — Camada de comunicação com o servidor.            NEW

   ROADMAP DESTE ARQUIVO:
   [✔] Aula 9  — Criado: buscarProdutos(), criarPedido(), buscarPedidos(),
                 deletarPedido(), atualizarStatusPedido().
                 BASE_URL centralizada — trocar uma linha muda todo o projeto.
                 Padrão: ler JSON antes do response.ok → usa dados.erro do servidor.
   [ ] Aula 10 — cadastrarProduto(dados) — POST /produtos.
                 Integração com cadastro.js: pratos salvos pelo admin
                 vão para o banco e aparecem no cardápio via buscarProdutos().
   [ ] Futuro  — editarProduto(id, dados) — PUT /produtos/:id.
                 excluirProduto(id) — DELETE /produtos/:id.
                 buscarCardapio(categoria) — GET /cardapio?categoria=X
                 para filtrar pratos por seção (Massas, Sobremesas, etc.).

   Carregado ANTES de main.js e pedidos.js em todos os HTMLs.
   ========================================================== */

// ─────────────────────────────────────────────────────────────────────────────
// BASE_URL — endereço do servidor Node.js
// Centralizar aqui evita repetir a URL em vários arquivos.
// Em produção, trocar por "https://api.techfood.com" sem mexer em mais nada.
//
// ⚠ CORS — se aparecer no console:
//   "Access to fetch at 'http://localhost:3000/...' has been blocked by CORS policy"
//   ...o problema está no SERVIDOR, não aqui no front-end.
//   Solução: adicionar app.use(cors()) no app.js do back-end (já configurado).
//   O front-end não tem como resolver CORS — ele apenas faz a requisição.
// ─────────────────────────────────────────────────────────────────────────────
const BASE_URL = "http://localhost:3000";

// ─────────────────────────────────────────────────────────────────────────────
// buscarProdutos()
// GET /produtos — retorna a lista de pratos do banco de dados.
//
// Padrão do slide: ler o JSON ANTES de verificar response.ok.
//   Isso permite usar dados.erro (mensagem do servidor) no throw,
//   em vez de um número genérico como "Erro 500".
// ─────────────────────────────────────────────────────────────────────────────
async function buscarProdutos() {
  const response = await fetch(`${BASE_URL}/produtos`);
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados.dados; // o servidor retorna { sucesso, dados, total } — extraímos só o array
}

// ─────────────────────────────────────────────────────────────────────────────
// criarPedido(cliente, itens)
// POST /pedidos — envia um novo pedido para o servidor.
//
// O back-end exige produto_id e quantidade — não o nome nem o preço.
// Preço nunca vem do front-end: o servidor busca no banco para evitar
// que alguém manipule o valor antes de enviar.
//
// headers: { "Content-Type": "application/json" } avisa o servidor
//   que o corpo da requisição é JSON — sem isso ele não consegue ler.
// JSON.stringify converte o objeto JS em texto JSON para enviar.
// ─────────────────────────────────────────────────────────────────────────────
async function criarPedido(cliente, itens) {
  const response = await fetch(`${BASE_URL}/pedidos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cliente, itens }),
  });
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados;
}

// ─────────────────────────────────────────────────────────────────────────────
// buscarPedidos()
// GET /pedidos — retorna todos os pedidos do banco (para o painel da cozinha).
// ─────────────────────────────────────────────────────────────────────────────
async function buscarPedidos() {
  const response = await fetch(`${BASE_URL}/pedidos`);
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados;
}

// Deletar Pedidos
async function deletarPedido(id) {
  const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
    method: "DELETE",
  });

  const dados = await response.json();

  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);

  return dados;
}

// Atualizar Status do Pedido
async function atualizarStatusPedido(id, novoStatus) {
  // PATCH - É um "PUT", mas faz atualização apenas em específicos itens, não em todos
  const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: novoStatus }),
  });

  const dados = await response.json();

  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);

  return dados;
}
