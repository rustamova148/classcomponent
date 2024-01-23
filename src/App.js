import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, dataS: "" };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.fetchData = this.fetchData.bind(this);
    console.log("constructor isledi");
  }

  handleDecrement() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  async fetchData() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    this.setState({dataS: data.fact});
  }

  componentDidMount() {
    this.fetchData();
    console.log("did mount isledi");
  }
  //* DOM PAINT
  render() {
    console.log("render isledi");
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.fetchData}>FETCH DATA</button>
        <div>{this.state.dataS}</div>
      </div>
    );
  }
}
