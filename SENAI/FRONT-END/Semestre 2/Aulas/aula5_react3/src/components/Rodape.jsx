export default function Rodape({ cidade, ano = 2026 }) {
  return (
    <footer className="rodape">
      TechFood — Sabor & Saber · {cidade} · {ano}
    </footer>
  );
}
