import { useState } from "react";

export default function CardPrato({ nome, preco, categoria, onAdicionar }) {
  const [quantidade, setQuantidade] = useState(1);
  const [quantidadeCurtidas, setQuantidadeCurtidas] = useState(0);

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
    if (quantidade < 10) {
      setQuantidade(quantidade + 1);
    }
  }

  function curtir() {
    setQuantidadeCurtidas(quantidadeCurtidas + 1);
  }

  function adicionar() {
    onAdicionar(quantidade);
    setQuantidade(1);
  }
  return (
    <article className="card-prato">
      <h2>{nome}</h2>
      <span className="categoria">{categoria}</span>
      <p className="preco">{precoFormatado}</p>
      <div className="quantidade">
        <button
          type="button"
          onClick={diminuir}
          aria-label={`Diminuir quantidade de ${nome}`}
        >
          -
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
      <div className="quantidade">
        <span>Quantidade de curtidas:{quantidadeCurtidas}</span>
        <button
          type="button"
          onClick={curtir}
          aria-label={`Curtir prato ${nome}`}
        >
          ❤️
        </button>
      </div>
      <button type="button" className="btn-adicionar" onClick={adicionar}>
        Adicionar ao Pedido
      </button>
    </article>
  );
}
