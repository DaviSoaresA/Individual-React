import React, { useState } from "react";
import Calculadora from "./components/Calculadora";
import "./App.css"

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [res, setRes] = useState("");


  function calcular(peso, altura) {
    const imc = peso/(altura*altura);
    if (imc < 18.5) {
      return "Baixo peso";
    } else if (imc > 18.4 && imc <= 24.9) {
      return "Eutrofia(Peso Ideal)";
    } else if (imc > 24.9 && imc <= 29.9) {
      return "Sobrepeso";
    } else if (imc > 29.9 && imc <= 34.9) {
      return "Obesidade grau 1";
    } else if (imc > 34.9 && imc <= 39.9) {
      return "Obesidade grau 2";
    } else{
      return "Obesidade Extrema"
    }
  };

  function classificação(e){
    e.preventDefault();
    if (peso && altura) {
      setRes(calcular(peso, altura))
    }else{
      setRes("Coloque um peso e altura válidos")
    }
  }

  return (
    <div>
      <header className="cabecalho">
        <h1>Calculadora IMC</h1>
        <hr />
      </header>
      <form onSubmit={classificação} className="corpo">
        <input
          type="number"
          placeholder="Digite o seu peso"
          name="peso"
          className="input"
          onChange={(e) => setPeso(parseFloat(e.target.value))}
        />
        <p></p>
        <input
          type="number"
          placeholder="Digite a sua altura"
          name="altura"
          className="input"
          onChange={(e) => setAltura(parseFloat(e.target.value) / 100)}
        />
        <p></p>
        <button type="submit">Calcular</button>
        <Calculadora classificacao={res} />
      </form>
      <footer className="rodape">
        <hr />
        <h3>Aluno: Davi Soares Antunes</h3>
      </footer>
    </div>
  );
}
