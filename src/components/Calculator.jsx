import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <input className="output" type="text" value="0" readOnly />
          <button type="button" className="btn btn-light">
            AC
          </button>
          <button type="button" className="btn btn-light">
            +/-
          </button>
          <button type="button" className="btn btn-light">
            %
          </button>
          <button type="button" className="btn btn-secondary">
            ÷
          </button>
          <button type="button" className="btn btn-light">
            7
          </button>
          <button type="button" className="btn btn-light">
            8
          </button>
          <button type="button" className="btn btn-light">
            9
          </button>
          <button type="button" className="btn btn-secondary">
            x
          </button>
          <button type="button" className="btn btn-light">
            4
          </button>
          <button type="button" className="btn btn-light">
            5
          </button>
          <button type="button" className="btn btn-light">
            6
          </button>
          <button type="button" className="btn btn-secondary">
            -
          </button>
          <button type="button" className="btn btn-light">
            1
          </button>
          <button type="button" className="btn btn-light">
            2
          </button>
          <button type="button" className="btn btn-light">
            3
          </button>
          <button type="button" className="btn btn-secondary">
            +
          </button>
          <button type="button" id="zero-btn" className="btn btn-light">
            0
          </button>
          <button type="button" className="btn btn-light">
            .
          </button>
          <button type="button" className="btn btn-secondary">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
