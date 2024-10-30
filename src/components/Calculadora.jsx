import React, { Component } from "react";

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classificacaoIMC: props.classificacao,
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
  }

  componentWillUnmount() {
    console.log("Will Unmount");
  }

  render() {
    return (
      <div>
        <h2>Classificação do IMC: {this.state.classificacaoIMC}</h2>
      </div>
    );
  }
}
