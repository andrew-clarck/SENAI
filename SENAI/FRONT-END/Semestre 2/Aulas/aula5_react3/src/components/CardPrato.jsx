import { useState } from "react";
import Selo from "./Selo";

const QUANTIDADE_MAXIMA = 10;

export default function CardPrato({
  nome,
  preco,
  categoria,
  descricao,
  vegetariano = false,
  destaque = false,
  disponivel = true,
  onAdicionar,
}) {
  const [quantidade, setQuantidade] = useState(1);
  const [mostrarDescricao, setMostrarDescricao] = useState(false);
  const [curtidas, setCurtidas] = useState(0);

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    if (quantidade < QUANTIDADE_MAXIMA) {
      setQuantidade(quantidade + 1);
    }
  }

  function adicionar() {
    onAdicionar(quantidade, preco);
    setQuantidade(1);
  }
  return (
    <article className={destaque ? "card-prato destaque" : "card-prato"}>
      <span className="categoria">{categoria}</span>
      <h2>
        {categoria === "Sobremesa" ? "🍰 " : ""}
        {nome}
      </h2>

      <div className="selos">
        {destaque && <Selo texto="Destaque" tipo="destaque" />}
        {vegetariano && <Selo texto="Vegetariano" tipo="veg" />}
        {!disponivel && <Selo texto="Esgotado" tipo="esgotado" />}
      </div>

      <p className="preco">{precoFormatado}</p>

      {mostrarDescricao && <p className="descricao">{descricao}</p>}
      <button
        type="button"
        className="btn-secundario"
        onClick={() => setMostrarDescricao(!mostrarDescricao)}
      >
        {mostrarDescricao ? "Esconder descrição" : "Ver descrição"}
      </button>

      {disponivel ? (
        <>
          <div className="quantidade">
            <button
              type="button"
              onClick={diminuir}
              aria-label={`Diminuir quantidade de ${nome}`}
            >
              −
            </button>

            <span>{quantidade}</span>

            <button
              type="button"
              onClick={aumentar}
              aria-label={`Aumentar quantidade de ${nome}`}
            >
              +
            </button>
          </div>

          <button type="button" className="btn-adicionar" onClick={adicionar}>
            Adicionar ao pedido
          </button>
        </>
      ) : (
        <button type="button" className="btn-indisponivel" disabled>
          Indisponível
        </button>
      )}
      <button
        type="button"
        className="btn-secundario"
        onClick={() => setCurtidas(curtidas + 1)}
      >
        ❤️ Curtir ({curtidas})
      </button>
    </article>
  );
}
