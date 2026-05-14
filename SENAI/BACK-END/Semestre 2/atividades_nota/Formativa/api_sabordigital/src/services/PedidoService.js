const PedidoRepository = require("../repositories/PedidoRepository");

function validarId(id) {
  if (
    !id ||
    id.trim() === "" ||
    !Number.isInteger(Number(id)) ||
    Number(id) < 0
  ) {
    throw {
      status: 400,
      mensagem: "ID inválido",
    };
  }
}

class PedidoService {
    async listarPedidos(){
        const pedidos = await PedidoRepository.listarPedidos()

        return{
            sucesso: true,
            dados: pedidos,
            total: pedidos.length
        }
    }

    async buscarPedidoPorId(id){
        validarId(id)

        const pedido = await PedidoRepository.buscarPedidoPorId(id)

        if (!pedido){
            throw{
                status: 404,
                mensagem: "Pedido não encontrado"
            }
        }

        return{
            sucesso: true,
            dados: pedido[0]
        }
    }

    async cadastrarPedido(dadosDoPedido){
        
    }
}
