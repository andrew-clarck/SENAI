export default function Header({totalItens}) {
  return (
    <header className="header">
      <h1>TechFood - Sabor & Saber</h1>
      <p>O sabor que ensina! ヾ(≧▽≦*)o</p>
      <p className="carrinho">Itens no Pedido: {totalItens}</p>
    </header>
  );
}
