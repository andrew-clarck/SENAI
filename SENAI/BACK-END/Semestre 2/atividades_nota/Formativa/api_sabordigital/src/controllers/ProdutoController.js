const ProdutoService = require("../services/ProdutoService");

class ProdutoController {
  async listarProduto(req, res) {
    try {
      const resultado = await ProdutoService.listarProdutos();
      res.status(200).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        // Pode pegar o throw com status 400 no ProdutoService, por isso, o erro.status
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor", // erro.mensagem caso tenha dado erro no ProdutoService, ele pega a mensagem definida nas validações
        erro: erro.stack || erro,
      });
    }
  }

  async buscarProdutoPorId(req, res) {
    try {
      const resultado = await ProdutoService.buscarProdutoPorId(req.params.id);
      res.status(200).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async cadastrarProduto(req, res) {
    try {
      const resultado = await ProdutoService.cadastrarProduto(req.body);
      res.status(201).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async atualizarProduto(req, res) {
    try {
      const resultado = await ProdutoService.atualizarProduto(
        req.params.id,
        req.body,
      );
      res.status(200).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async apagarProduto(req, res) {
    try {
      const resultado = await ProdutoService.apagarProduto(req.params.id);
      res.status(200).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }
}

module.exports = new ProdutoController()