import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
    this.calcEvent = this.calcEvent.bind(this);
  }

  calcEvent(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="container">
        <div className="calculator">
          <p className="output">
            {total}
            {operation}
            {next}
          </p>

          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            AC
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            +/-
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            %
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-secondary"
          >
            ÷
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            7
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            8
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            9
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-secondary"
          >
            x
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            4
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            5
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            6
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-secondary"
          >
            -
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            1
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            2
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            3
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-secondary"
          >
            +
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            id="zero-btn"
            className="btn btn-light"
          >
            0
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-light"
          >
            .
          </button>
          <button
            onClick={this.calcEvent}
            type="button"
            className="btn btn-secondary"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
