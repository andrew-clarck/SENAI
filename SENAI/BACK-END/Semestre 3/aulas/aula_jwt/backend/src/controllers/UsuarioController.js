const UsuarioService = require("../services/UsuarioService");

class UsuarioController {
  async registrar(req, res) {
    try {
      const { nome, email, senha, papel } = req.body;
      const resultado = await UsuarioService.registrarUsuario(req.body);
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async login(req, res) {
    try {
      const { email, senha } = req.body
      const resultado = await UsuarioService.login(req.body);
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

module.exports = new UsuarioController();
