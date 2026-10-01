import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import { cardapio } from "./data/cardapio";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [totalItens, setTotalItens] = useState(0);

  function adicionarAoPedido(quantidade) {
    setTotalItens(totalItens + quantidade);
  }

  return (
    <main className="app">
      <Header totalItens={totalItens}/>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
    </main>
  );
}
