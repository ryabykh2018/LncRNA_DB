import React, { Component } from 'react';
import './CalculatorV2.css';


export default class CalculatorV2 extends Component {

    state = {
        result: 0,
        number1: 10,
        number2: 7,
        operation: '+'
    }

    showResult = () => {
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
        this.setState({ result }) // { result : result }
    }

    handleNumberChange = (numberName) => (event) => {
        let number = Number(event.target.value)
        if (isNaN(number)) number = 0
        this.setState({ [numberName]: number })
    }

    handleOperationChange = (event) => {
        this.setState({operation: event.target.value});
    }
  
    render() {
        const { number1, number2, result } = this.state
        return (
        <div className="calculator">
        <div>
          <input value={number1} onChange={this.handleNumberChange('number1')}/>
        </div>
        <div>
          <select name="" id="" onChange={this.handleOperationChange}>
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
        <div>
          <input value={number2} onChange={this.handleNumberChange('number2')}/>
        </div>
          <div>
            <button onClick={this.showResult}>Get result</button>
          </div>
          <div>
            Result :<span>{result}</span>
          </div>
        </div>
    );
  }
}
