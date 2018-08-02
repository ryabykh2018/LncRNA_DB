import React, { Component } from 'react';
import './CalculatorV2.css';


export default class CalculatorV2 extends Component {
  constructor(){
    super();

    this.state ={
      result: 0,
      number1: 10,
      number2: 7,
      operation: "+"
    };
  
    this.showResult = this.showResult.bind(this);
  }

  showResult() {
    let result = 0;
    switch (this.state.operation) {
      case "+":
        result= this.state.number1 + this.state.number2;
        break;
      case "-":
        result = this.state.number1 - this.state.number2;
        break;
      default:
        break;
    }
    this.setState({result: result})
  }

  handleNumber1Change(e) {
    let number = Number(e.target.value)
    if (isNaN(number)) number = 0
    this.setState({number1: number });
  }

  handleNumber2Change(e) {
    let number = Number(e.target.value)
    if (isNaN(number)) number = 0
    this.setState({number2: number });
  }

  handleOperationChange(e) {
    this.setState({operation: e.target.value});
  }
  
  render() {
    return (
      <div className="calculator">
        <div>
          <input value={this.state.number1} onChange={this.handleNumber1Change.bind(this)}/>
        </div>
        <div>
          <select name="" id="" onChange={this.handleOperationChange.bind(this)}>
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
        <div>
          <input value={this.state.number2} onChange={this.handleNumber2Change.bind(this)}/>
        </div>
          <div>
            <button onClick={this.showResult}>Get result</button>
          </div>
          <div>
            Result :<span>{this.state.result}</span>
          </div>
      </div>
    );
  }
}
