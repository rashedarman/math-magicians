import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <input className="output" type="text" value="0" readOnly />
          <button type="button" className="button">
            AC
          </button>
          <button type="button" className="button">
            +/-
          </button>
          <button type="button" className="button">
            %
          </button>
          <button type="button" className="button secondary">
            ÷
          </button>
          <button type="button" className="button">
            7
          </button>
          <button type="button" className="button">
            8
          </button>
          <button type="button" className="button">
            9
          </button>
          <button type="button" className="button secondary">
            x
          </button>
          <button type="button" className="button">
            4
          </button>
          <button type="button" className="button">
            5
          </button>
          <button type="button" className="button">
            6
          </button>
          <button type="button" className="button secondary">
            -
          </button>
          <button type="button" className="button">
            1
          </button>
          <button type="button" className="button">
            2
          </button>
          <button type="button" className="button">
            3
          </button>
          <button type="button" className="button secondary">
            +
          </button>
          <button type="button" className="button zero">
            0
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button secondary">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
