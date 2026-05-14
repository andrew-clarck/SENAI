const pool = require("../config/database");

class PedidoRepository {
  async listarPedidos() {
    const listaPedidos = await pool.query("SELECT * FROM pedido");
    return listaPedidos;
  }

  async buscarPedidoPorId(id) {
    const mostrarPedido = await pool.query(
      "SELECT * FROM pedido WHERE id = ?",
      [id],
    );
    return mostrarPedido[0];
  }

  async cadastrarPedido(dadosDoPedido) {
    const resultadoCadastro = await pool.query("INSERT INTO pedido SET ?", [
      dadosDoPedido,
    ]);
    return resultadoCadastro.insertId;
  }

  async atualizarPedido(id, dadosDoPedido) {
    const camposPedido = [];
    const dadoPedido = [];

    for (const [key, value] of Object.entries[dadosDoPedido]) {
      camposPedido.push(`${key} = ?`);
      dadoPedido.push(value);

      if (camposPedido.length === 0) return null;

      dadoPedido.push(id);

      const query = `UPDATE produto SET ${camposPedido.join(",")} WHERE id = ?`;

      const resultado = await pool.query(query, dadoPedido);

      return resultado.affectedRows;
    }
  }

  async apagarPedido(id) {
    await pool.query("DELETE FROM pedido WHERE id = ?", [id]);

    return true;
  }
}

module.exports = new PedidoRepository();
