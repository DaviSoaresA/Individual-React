import React, { useState } from 'react'
import Classificacao from '../Classificacao';
import * as styled from "./Calculadora.module.css";

export default function Calculadora() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [res, setRes] = useState("");
  const [indice, setIndice] = useState(0);

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
      return "Obesidade Extrema";
    }
  };

  function classificação(e){
    e.preventDefault();
    if (peso && altura) {
      setRes(calcular(peso, altura));
      setIndice(peso/(altura*altura));
    }else{
      setRes("Coloque um peso e altura válidos");
    }
  }

  return (
    <div>
      <form onSubmit={classificação} className={styled.corpo}>
        <input
          type="number"
          placeholder="Digite o seu peso"
          name="peso"
          className={styled.entrada}
          onChange={(e) => setPeso(parseFloat(e.target.value))}
        />
        <p></p>
        <input
          type="number"
          placeholder="Digite a sua altura"
          name="altura"
          className={styled.entrada}
          onChange={(e) => setAltura(parseFloat(e.target.value) / 100)}
        />
        <p></p>
        <button type="submit" className={styled.botao}>Calcular</button>
      </form>
      <Classificacao classificacao={res} imc={indice}/>
    </div>
  )
}
