const ProdutoService = require("../services/ProdutoService");
const fs = require("node:fs");
const path = require("node:path");

class ProdutoController {
  async listar(req, res) {
    try {
      const resultado = await ProdutoService.listarProdutos();
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async buscarPorId(req, res) {
    try {
      const resultado = await ProdutoService.buscarProdutoPorId(req.params.id);
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async cadastrar(req, res) {
    try {
      let imagem = null;

      if (req.file) {
        imagem = `/uploads/produtos/${req.file.filename}`;
      }

      const dados = {
        ...req.body, // Spread Operator, despeja todos os itens do req.body, ou seja, vira: { nome: ..., descricao: ..., etc.}
        imagem,
      };

      const resultado = await ProdutoService.cadastrarProduto(dados);
      res.status(201).json(resultado);
    } catch (erro) {
      if (req.file) {
        const caminhoArquivo = path.resolve(req.file.path);

        if (fs.existsSync(caminhoArquivo)) {
          fs.unlinkSync(caminhoArquivo);
        }
      }

      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async atualizar(req, res) {
    try {
      const resultado = await ProdutoService.atualizarProduto(
        req.params.id,
        req.body,
      );
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async deletar(req, res) {
    try {
      const resultado = await ProdutoService.deletarProduto(req.params.id);
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }
}

module.exports = new ProdutoController();
