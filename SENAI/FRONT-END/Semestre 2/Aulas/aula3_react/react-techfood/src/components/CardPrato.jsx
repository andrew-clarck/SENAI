export default function CardPrato({ nome, preco, categoria }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card-prato">
      <h2>{nome}</h2>
      <span className="categoria">{categoria}</span>
      <p className="preco">{precoFormatado}</p>
    </article>
  );
}
