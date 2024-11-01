import React, { Component } from "react";
import * as styled from "./Classificacao.module.css";

export default class Classificacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classificacaoIMC: props.classificacao,
      imc: props.imc,
    };
  }

  componentDidMount() {
    console.log("Did mount");
  }

  componentDidUpdate(upProps) {
    console.log("Did Update");
    if (upProps.classificacao != this.props.classificacao) {
      this.setState({ classificacaoIMC: this.props.classificacao });
    }
    if (upProps.imc != this.props.imc) {
      this.setState({ imc: this.props.imc });
    }
  }

  componentWillUnmount() {
    console.log("Will Unmount");
  }

  render() {
    return (
      <div>
        <h2 className={styled.indice}>
          IMC: {this.state.imc}
        </h2>
        <h2 className={styled.classificacao}>
          Classificação: {this.state.classificacaoIMC}
        </h2>
      </div>
    );
  }
}
