import Header from "./components/Header";
import SecaoCardapio from "./components/SecaoCardapio";
import { cardapio } from "./data/cardapio";
import "./App.css";
import { useState } from "react";
import Rodape from "./components/Rodape";

const categorias = ["Prato Principal", "Sobremesa", "Bebida"];

export default function App() {
  const [totalItens, setTotalItens] = useState(0);
  const [totalValor, setTotalValor] = useState(0);

  function adicionarAoPedido(quantidade, preco) {
    setTotalItens((total) => total + quantidade);
    setTotalValor((total) => total + quantidade * preco);
  }

  function limparPedido() {
    setTotalItens(0);
    setTotalValor(0);
  }

  return (
    <main className="app">
      <Header
        totalItens={totalItens}
        totalValor={totalValor}
        onLimpar={limparPedido}
      />
      <p className="contador">Cardápio com {cardapio.length} itens</p>

      {categorias.map((categoria) => (
        <SecaoCardapio
          key={categoria}
          titulo={categoria}
          pratos={cardapio.filter((prato) => prato.categoria === categoria)}
          onAdicionar={adicionarAoPedido}
        />
      ))}

      <Rodape cidade="Salto/SP" />
    </main>
  );
}
