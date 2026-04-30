// =============================================================================
// ROTA DE AGENDAMENTOS
// =============================================================================
function validarId(id, res) {
  if (!id || !Number.isInteger(Number(id))) {
    mensagemValidacaoId(res);
    return true;
  }
  return false;
}

function mensagemValidacaoId(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: "ID inválido",
  });
}

function validarExistencia(entidade, nome, res) {
  if (entidade.length === 0) {
    mensagemValidacaoExistencia(nome, res);
    return true;
  }
  return false;
}

function mensagemValidacaoExistencia(nome, res) {
  res.status(404).json({
    sucesso: false,
    mensagem: `${nome} não encontrado(a)`,
  });
}

function validarAtualizacaoEntidade(entidadeAtualizada, res) {
  if (Object.keys(entidadeAtualizada).length === 0) {
    mensagemValidacaoAtualizacaoEntidade(res);
    return true;
  }
  return false;
}

function mensagemValidacaoAtualizacaoEntidade(res) {
  res.status(400).json({
    sucesso: false,
    mensagem: "Nenhum campo válido foi enviado para atualização",
  });
}

app.put("/reserva/alteracao/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data, sala } = req.body;

    if (validarId(id, res)) return;

    const reservaExiste = await queryAsync(
      "SELECT * FROM reservas WHERE id = ?",
      [id],
    );

    if (validarExistencia(reservaExiste, "Reserva", res)) return;

    const reservaAtualizada = {};

    if (data !== undefined) {
      if (data != "") {
        return res.status(400).json({
          sucesso: false,
          mensagem: "O campo data deve conter uma data maior que agora",
        });
      }
      reservaAtualizada.data = data;
    }

    if (sala !== undefined) {
      if (typeof sala !== "number" || sala <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "O campo sala deve ser um número positivo.",
        });
      }
      reservaAtualizada.sala = sala;
    }

    if (validarAtualizacaoEntidade(reservaAtualizada, res)) return;

    await queryAsync("UPDATE reservas SET ? WHERE id = ?", [
      reservaAtualizada,
      id,
    ]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Reserva atualizada com sucesso!",
    });
  } catch (erro) {
    console.error("Erro ao atualizar reserva: ", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar reserva.",
      erro: erro.message,
    });
  }
});

// NOTA: Falta fazer o filtro de busca por data aqui
