import { useState } from "react";

// Cabeçalho
function Cabecalho() {
  return <h1>Portfólio - Abraão Seixas de Morais</h1>;
}

// Apresentação
function Sobre() {
  return (
    <section>
      <h2>Sobre mim</h2>
      <p>
        Sou estudante de Desenvolvimento de Sistemas.
        Sei HTML e JavaScript e tenho conhecimentos
        básicos em backend, frontend e banco de dados.
      </p>
    </section>
  );
}

// Componente que recebe uma habilidade por props
function Habilidade({ nome }) {
  return <li>{nome}</li>;
}

// Lista com pesquisa
function ListaHabilidades({ habilidades, filtro, mudarFiltro }) {
  const lista = habilidades.filter((item) =>
    item.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section>
      <h2>Minhas habilidades</h2>
      <input
        aria-label="Pesquisar habilidade"
        placeholder="Pesquisar habilidade"
        value={filtro}
        onChange={(e) => mudarFiltro(e.target.value)}
      />

      {lista.length === 0 ? (
        <p>Nenhuma habilidade encontrada.</p>
      ) : (
        <ul>
          {lista.map((item) => (
            <Habilidade key={item} nome={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

// Contato
function Contato() {
  return (
    <section>
      <h2>Contato</h2>
      <a href="https://github.com/uchihajk798-svg" target="_blank" rel="noreferrer">
        Meu GitHub
      </a>
    </section>
  );
}

// Estado compartilhado fica no componente pai
export default function App() {
  const [filtro, setFiltro] = useState("");

  const habilidades = [
    "HTML",
    "JavaScript",
    "Backend básico",
    "Frontend básico",
    "Banco de dados básico",
  ];

  const estilo = {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "25px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eeeeee",
    borderRadius: "10px",
    color: "#222",
  };

  return (
    <main style={estilo}>
      <Cabecalho />
      <Sobre />
      <ListaHabilidades
        habilidades={habilidades}
        filtro={filtro}
        mudarFiltro={setFiltro}
      />
      <Contato />
    </main>
  );
}
