import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [calcData, setCalcData] = useState({
    total: 0,
    operation: null,
    next: null,
  });
  const { total, next, operation } = calcData;

  const calcEvent = (e) => {
    setCalcData((state) => calculate(state, e.textContent));
  };

  useEffect(() => {
    document.querySelectorAll('button[type="button"]').forEach((button) => {
      button.addEventListener('click', () => calcEvent(button));
    });
  }, []);

  return (
    <div className="container">
      <div className="calculator">
        <p className="output">
          {total}
          {operation}
          {next}
        </p>

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

export default Calculator;
